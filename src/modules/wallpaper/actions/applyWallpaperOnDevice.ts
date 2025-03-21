import RTNDeviceWallpaper from "react-native-device-wallpaper-manager/js/NativeDeviceWallpaper";
import { Wallpaper } from "~/models";
import * as FileSystem from "expo-file-system";
import { getDirectoryPath } from "./saveWallpaperToDevice";

export type TWallpaperApplyDestination = "system" | "both" | "lock";

export async function applyWallpaperOnDevice(
  wallpaper: Wallpaper,
  destination: TWallpaperApplyDestination = "both",
) {
  const directory = await getDirectoryPath({ askForDirectory: false });
  if (!directory) {
    await RTNDeviceWallpaper?.setWallpaper(wallpaper.wallpaperUri, destination);
    return;
  }

  let file: FileSystem.FileInfo | undefined = undefined;
  try {
    // FIX: Not working on A11+ System
    file = await FileSystem.getInfoAsync(
      `${directory}/${wallpaper.wallpaperId}.${wallpaper.extension}`,
    );
  } catch (e) {}
  if (!file) {
    await RTNDeviceWallpaper?.setWallpaper(wallpaper.wallpaperUri, destination);
    return;
  }
  if (file.exists && !file.isDirectory) {
    await RTNDeviceWallpaper?.setWallpaper(file.uri, destination);
  } else {
    await RTNDeviceWallpaper?.setWallpaper(wallpaper.wallpaperUri, destination);
  }
}
