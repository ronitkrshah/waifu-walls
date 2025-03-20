import { Wallpaper } from "~/models";
import * as FileSystem from "expo-file-system";
import { Storage } from "expo-sqlite/kv-store";
import { Platform } from "react-native";
import { WallpaperService } from "~/services";

type TGetDirectoryOptions = {
  askForDirectory?: boolean;
};

/** Android 11+ */
export async function getDirectoryPath(options: TGetDirectoryOptions = { askForDirectory: true }) {
  if (Number(Platform.Version) < 30) {
    return "file:///sdcard/Pictures";
  }
  const savedDirectory = await Storage.getItemAsync("downloadDirectory");
  if (savedDirectory) {
    return savedDirectory;
  }
  if (options.askForDirectory) {
    const result = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
    if (result.granted) {
      Storage.setItemAsync("downloadDirectory", result.directoryUri);
      return result.directoryUri;
    }
  }
  return null;
}

export async function saveWallpaperToDevice(wallpaper: Wallpaper) {
  const directoryToSave = await getDirectoryPath();

  if (!directoryToSave) {
    throw new Error("Directory Not Found");
  }

  let filePath = `${directoryToSave}/${wallpaper.wallpaperId}.${wallpaper.extension}`;
  if (Number(Platform.Version) >= 30) {
    filePath = await FileSystem.StorageAccessFramework.createFileAsync(
      directoryToSave,
      wallpaper.wallpaperId,
      wallpaper.mimeType,
    );
  }

  let base64: string | undefined = undefined;
  try {
    base64 = await WallpaperService.getBase64FromImageURI(wallpaper.wallpaperUri);
  } catch (e) {}

  if (!base64) {
    if (Number(Platform.Version) >= 30) {
      FileSystem.StorageAccessFramework.deleteAsync(filePath, { idempotent: true });
    }
    throw new Error("Error Downloading Wallpaper");
  }
  await FileSystem.writeAsStringAsync(filePath, base64, { encoding: "base64" });
}
