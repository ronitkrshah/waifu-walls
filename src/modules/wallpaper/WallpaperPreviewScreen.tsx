import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import { Fragment, useEffect, useRef, useState } from "react";
import { Dimensions, InteractionManager, StyleSheet, ToastAndroid, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import { DefaultStyles } from "~/constants";
import { TStackNavigationRoutes } from "~/navigation";
import { Button, Dialog, IconButton, Text } from "react-native-paper";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { DialogModal, DialogModalRef, useActivityLoader } from "~/components";
import {
  applyWallpaperOnDevice,
  saveWallpaperToDevice,
  addWallpaperToFavourites,
  TWallpaperApplyDestination,
  removeWallpaperFromFavourites,
} from "./actions";
import { NotificationService } from "~/services";
import { db, TDBFavourites } from "~/database";

type TProps = NativeStackScreenProps<TStackNavigationRoutes, "WallpaperPreviewScreen">;

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const ICON_BUTTON_SIZE = 30;

const AnimatedImage = Animated.createAnimatedComponent(Image);

export function WallpaperPreviewScreen({ route }: TProps) {
  const [isFavourite, setIsFavourite] = useState(false);
  const { wallpaper } = route.params;
  const informationActionDialogRef = useRef<DialogModalRef>(null);
  const applyWallpaperDialogRef = useRef<DialogModalRef>(null);
  const activityLoader = useActivityLoader();
  const tapGesture = Gesture.Tap();

  tapGesture
    .numberOfTaps(2)
    .onEnd(() => {
      informationActionDialogRef.current?.show();
    })
    .runOnJS(true);

  async function handleWallpaperDownload() {
    informationActionDialogRef.current?.hide();
    activityLoader.present("Downloading...");
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
        activityLoader.close();
        informationActionDialogRef.current?.show();
      });
  }

  async function handleApplyWallpaper(destination: TWallpaperApplyDestination) {
    ToastAndroid.show("Applying Wallpaper", ToastAndroid.SHORT);
    applyWallpaperDialogRef.current?.hide();
    informationActionDialogRef.current?.show();

    applyWallpaperOnDevice(wallpaper, destination)
      .then(() => {
        ToastAndroid.show("Wallpaper Applied", ToastAndroid.SHORT);
      })
      .catch(() => {
        ToastAndroid.show("Error Applying Wallpaper", ToastAndroid.SHORT);
      });
  }

  async function handleWallpaperLike() {
    if (isFavourite) {
      setIsFavourite(false);
      removeWallpaperFromFavourites(wallpaper).catch(() => {
        setIsFavourite(true);
      });
    } else {
      setIsFavourite(true);
      addWallpaperToFavourites(wallpaper).catch(() => {
        setIsFavourite(false);
      });
    }
  }

  useEffect(() => {
    db.getFirstAsync<Omit<TDBFavourites, "id">>(
      "SELECT wallpaperId from favourites WHERE wallpaperId = ?;",
      [wallpaper.wallpaperId],
    ).then((data) => {
      if (data) {
        setIsFavourite(true);
      }
    });
  }, []);

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
      <DialogModal
        ref={informationActionDialogRef}
        onDismiss={() => informationActionDialogRef.current?.hide()}
      >
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
              mode={isFavourite ? "contained" : undefined}
              onPress={handleWallpaperLike}
            />
            <IconButton
              size={ICON_BUTTON_SIZE}
              icon={"download"}
              onPress={handleWallpaperDownload}
            />
            <IconButton
              size={ICON_BUTTON_SIZE}
              icon={"image"}
              onPress={() => {
                informationActionDialogRef.current?.hide();
                applyWallpaperDialogRef.current?.show();
              }}
            />
          </View>
        </Dialog.Content>
      </DialogModal>

      {/** Apply Wallpaper Dialog */}
      <DialogModal
        ref={applyWallpaperDialogRef}
        onDismiss={() => {
          applyWallpaperDialogRef.current?.hide();
          informationActionDialogRef.current?.show();
        }}
      >
        <Dialog.Title>Set Wallpaper On</Dialog.Title>
        <Dialog.Content>
          <View style={styles.wallpaperActionContainer}>
            <Button
              icon={"cellphone-cog"}
              mode="contained"
              onPress={() => handleApplyWallpaper("system")}
            >
              Home
            </Button>
            <Button
              icon={"cellphone-lock"}
              mode="contained"
              onPress={() => handleApplyWallpaper("lock")}
            >
              Lock
            </Button>
            <Button
              icon={"cellphone"}
              mode="contained"
              onPress={() => handleApplyWallpaper("both")}
            >
              Both
            </Button>
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
