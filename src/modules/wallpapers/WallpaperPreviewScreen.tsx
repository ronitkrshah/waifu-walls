import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { Fragment } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Grayscale } from "react-native-color-matrix-image-filters";
import Animated, { FadeIn } from "react-native-reanimated";
import { DefaultStyles } from "~/constants";
import { TStackNavigationRoutes } from "~/navigation";

type TProps = NativeStackScreenProps<TStackNavigationRoutes, "WallpaperPreviewScreen">;

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const AnimatedImage = Animated.createAnimatedComponent(Image);

export function WallpaperPreviewScreen({ route }: TProps) {
  const { wallpaper } = route.params;
  return (
    <Fragment>
      {wallpaper.isFavourite ? (
        <AnimatedImage
          source={{ uri: wallpaper.wallpaperUri }}
          style={StyleSheet.absoluteFillObject}
          entering={FadeIn.duration(1000)}
          blurRadius={20}
        />
      ) : (
        <Grayscale style={StyleSheet.absoluteFillObject}>
          <AnimatedImage
            source={{ uri: wallpaper.wallpaperUri }}
            style={StyleSheet.absoluteFillObject}
            entering={FadeIn.duration(1000)}
            blurRadius={20}
          />
        </Grayscale>
      )}
      <View style={styles.container}>
        <AnimatedImage
          entering={FadeIn.duration(1500)}
          source={{ uri: wallpaper.wallpaperUri }}
          style={styles.wallpaper}
        />
      </View>
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
