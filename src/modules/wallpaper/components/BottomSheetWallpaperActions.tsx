import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Dimensions, StyleSheet, ToastAndroid } from "react-native";
import { Dialog, IconButton, Text } from "react-native-paper";
import { Wallpaper } from "~/models";
import * as FileSystem from "expo-file-system";
import { Platform } from "react-native";
import { NotificationService, WallpaperService } from "~/services";
import { Fragment, useRef, useState } from "react";
import { DialogModal, DialogModalRef } from "~/components";

type TProps = {
  wallpaper: Wallpaper;
};

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

function BottomSheetWallpaperActions({ wallpaper }: TProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const dialogModalRef = useRef<DialogModalRef>(null);

  /** Android 11+ */
  async function getSAFDirectoryPath() {
    const result = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
    if (result.granted) {
      return result.directoryUri;
    }
    return null;
  }

  async function saveWallpaperToDevice() {
    setIsDownloading(true);
    // Default for below Android 11 devices
    let directoryPath = "file:///sdcard/Pictures";

    try {
      if (Number(Platform.Version) >= 30) {
        const path = await getSAFDirectoryPath();
        if (!path) {
          throw new Error("SAF Access Not Available");
        }
        directoryPath = path;
      }

      const fileExtension = wallpaper.wallpaperUri.split(".").pop() || "jpg";
      const mimeType = fileExtension === "png" ? "image/png" : "image/jpeg";
      let filePath = `${directoryPath}/${wallpaper.wallpaperId}.${fileExtension}`;
      if (Number(Platform.Version) >= 30) {
        filePath = await FileSystem.StorageAccessFramework.createFileAsync(
          directoryPath,
          wallpaper.wallpaperId,
          mimeType,
        );
      }
      const base64 = await WallpaperService.getBase64FromImageURI(wallpaper.wallpaperUri);

      await FileSystem.writeAsStringAsync(filePath, base64, { encoding: "base64" });
      NotificationService.sendNotification(
        "New Fear Unlocked",
        "Your waifu steals the spotlight in your gallery.",
      );
    } catch (error) {
      ToastAndroid.show(
        error instanceof Error ? error.message : "Failed To Download",
        ToastAndroid.SHORT,
      );
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <Fragment>
      <BottomSheetView style={styles.container}>
        <IconButton
          mode="contained"
          icon="heart"
          size={60}
          onPress={() => {
            dialogModalRef.current?.show();
          }}
        />
        <IconButton
          animated
          loading={isDownloading}
          disabled={isDownloading}
          mode="contained"
          icon="download"
          size={60}
          onPress={saveWallpaperToDevice}
        />
      </BottomSheetView>
      <DialogModal onDismiss={() => dialogModalRef.current?.hide()} ref={dialogModalRef}>
        <Dialog.Title>Information</Dialog.Title>
        <Dialog.Content>
          <Text>Not Implemented Yet</Text>
        </Dialog.Content>
      </DialogModal>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: SCREEN_HEIGHT * 0.3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default BottomSheetWallpaperActions;
