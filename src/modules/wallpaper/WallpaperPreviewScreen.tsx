import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { Fragment, useRef } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { DefaultStyles } from "~/constants";
import { TStackNavigationRoutes } from "~/navigation";
import { BottomSheetWallpaperActions } from "./components";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useTheme } from "react-native-paper";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

type TProps = NativeStackScreenProps<TStackNavigationRoutes, "WallpaperPreviewScreen">;

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const AnimatedImage = Animated.createAnimatedComponent(Image);

export function WallpaperPreviewScreen({ route }: TProps) {
  const { wallpaper } = route.params;
  const theme = useTheme();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const tapGesture = Gesture.Tap();

  tapGesture
    .numberOfTaps(2)
    .onEnd(() => {
      bottomSheetModalRef.current?.present();
    })
    .runOnJS(true);

  return (
    <Fragment>
      <AnimatedImage
        source={{ uri: wallpaper.wallpaperUri }}
        style={StyleSheet.absoluteFillObject}
        entering={FadeIn.duration(1000)}
        blurRadius={20}
      />
      <View style={styles.container}>
        <GestureDetector gesture={tapGesture}>
          <AnimatedImage
            entering={FadeIn.duration(1500)}
            source={{ uri: wallpaper.wallpaperUri }}
            style={styles.wallpaper}
          />
        </GestureDetector>
      </View>

      {/** Bottom Sheet Modal Actions */}
      <BottomSheetModalProvider>
        <BottomSheetModal
          onDismiss={bottomSheetModalRef.current?.dismiss}
          handleIndicatorStyle={{ backgroundColor: theme.colors.primary }}
          backgroundStyle={{ backgroundColor: theme.colors.surface }}
          ref={bottomSheetModalRef}
        >
          <BottomSheetWallpaperActions wallpaper={wallpaper} />
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...DefaultStyles.flexCenter,
  },
  wallpaper: {
    height: SCREEN_WIDTH * 1.2,
    width: SCREEN_WIDTH * 0.8,
    borderRadius: 20,
  },
});
