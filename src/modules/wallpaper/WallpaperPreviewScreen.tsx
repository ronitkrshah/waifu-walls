import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { Fragment, useRef, useState } from "react";
import { Dimensions, StyleSheet, ToastAndroid, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { DefaultStyles } from "~/constants";
import { TStackNavigationRoutes } from "~/navigation";
import { Dialog, IconButton, Text } from "react-native-paper";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { DialogModal, DialogModalRef } from "~/components";
import { saveWallpaperToDevice } from "./actions";
import { NotificationService } from "~/services";

type TProps = NativeStackScreenProps<TStackNavigationRoutes, "WallpaperPreviewScreen">;

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const ICON_BUTTON_SIZE = 30;

const AnimatedImage = Animated.createAnimatedComponent(Image);

export function WallpaperPreviewScreen({ route }: TProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { wallpaper } = route.params;
  const dialogModalRef = useRef<DialogModalRef>(null);
  const tapGesture = Gesture.Tap();

  tapGesture
    .numberOfTaps(2)
    .onEnd(() => {
      dialogModalRef.current?.show();
    })
    .runOnJS(true);

  function handleWallpaperDownload() {
    setIsDownloading(true);
    saveWallpaperToDevice(wallpaper)
      .then(() => {
        NotificationService.sendNotification(
          "New Fear Unlocked",
          "Your waifu steals the spotlight in your gallery.",
        );
      })
      .catch((e) => {
        ToastAndroid.show((e as Error).message, ToastAndroid.SHORT);
      })
      .finally(() => {
        setIsDownloading(false);
      });
  }

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

      {/** Dialog Modal */}
      <DialogModal ref={dialogModalRef} onDismiss={() => dialogModalRef.current?.hide()}>
        <Dialog.Title>Waifu</Dialog.Title>
        <Dialog.Content>
          {[
            { title: "Id", desc: wallpaper.wallpaperId },
            { title: "Type", desc: wallpaper.type },
            { title: "Category", desc: wallpaper.category as string },
          ].map((item) => (
            <View key={item.title} style={styles.wallpaperInfoContainer}>
              <Text>{item.title}</Text>
              <Text>{item.desc}</Text>
            </View>
          ))}
          <View style={styles.wallpaperActionContainer}>
            <IconButton
              size={ICON_BUTTON_SIZE}
              icon={"heart"}
              mode={wallpaper.isFavourite ? "contained" : undefined}
            />
            <IconButton
              size={ICON_BUTTON_SIZE}
              icon={"download"}
              loading={isDownloading}
              onPress={handleWallpaperDownload}
            />
            <IconButton size={ICON_BUTTON_SIZE} icon={"image"} />
          </View>
        </Dialog.Content>
      </DialogModal>
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
  wallpaperInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wallpaperActionContainer: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 16,
  },
});
