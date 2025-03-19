import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Dimensions, StyleSheet, ToastAndroid } from "react-native";
import { IconButton } from "react-native-paper";
import { Wallpaper } from "~/models";
import { StorageAccessFramework } from "expo-file-system";
import { Platform } from "react-native";
import { WallpaperService } from "~/services";
import { useState } from "react";

type TProps = {
  wallpaper: Wallpaper;
};

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

function BottomSheetWallpaperActions({ wallpaper }: TProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  async function saveWallpaperToDevice() {
    setIsDownloading(true);
    try {
      if (Number(Platform.Version) >= 30) {
        const result = await StorageAccessFramework.requestDirectoryPermissionsAsync();
        if (result.granted) {
          const base64 = await WallpaperService.getBase64FromImageURI(wallpaper.wallpaperUri);
          if (!base64) {
            throw new Error("Invalid base64");
          }
          const mimeType = wallpaper.wallpaperUri.endsWith(".png") ? "image/png" : "image/jpeg";
          const filePath = await StorageAccessFramework.createFileAsync(
            result.directoryUri,
            wallpaper.wallpaperId,
            mimeType
          );
          await StorageAccessFramework.writeAsStringAsync(filePath, base64, {
            encoding: "base64",
          });
        }
      } else {
        throw new Error("Not Implemented");
      }
    } catch (error) {
      ToastAndroid.show(
        error instanceof Error ? error.message : "Failed to download wallpaper",
        ToastAndroid.SHORT
      );
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <BottomSheetView style={styles.container}>
      <IconButton
        mode="contained"
        icon="heart"
        size={60}
        onPress={() => console.log("Heart icon pressed")}
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
