import { Wallpaper } from "~/models";
import * as FileSystem from "expo-file-system";
import { Storage } from "expo-sqlite/kv-store";
import { Platform } from "react-native";
import { WallpaperService } from "~/services";

/** Android 11+ */
async function getDirectoryPath() {
  if (Number(Platform.Version) < 31) {
    return "file:///sdcard/Pictures";
  }
  const savedDirectory = await Storage.getItemAsync("downloadDirectory");
  if (savedDirectory) {
    return savedDirectory;
  }
  const result = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
  if (result.granted) {
    Storage.setItemAsync("downloadDirectory", result.directoryUri);
    return result.directoryUri;
  }
  return null;
}

export async function saveWallpaperToDevice(wallpaper: Wallpaper) {
  const directoryToSave = await getDirectoryPath();

  if (!directoryToSave) {
    throw new Error("Directory Not Found");
  }
  const fileExtension = wallpaper.wallpaperUri.split(".").pop() || "jpg";
  const mimeType = fileExtension === "png" ? "image/png" : "image/jpeg";

  let filePath = `${directoryToSave}/${wallpaper.wallpaperId}.${fileExtension}`;
  if (Number(Platform.Version) > 30) {
    filePath = await FileSystem.StorageAccessFramework.createFileAsync(
      directoryToSave,
      wallpaper.wallpaperId,
      mimeType,
    );
  }

  let base64: string | undefined = undefined;
  try {
    base64 = await WallpaperService.getBase64FromImageURI(wallpaper.wallpaperUri);
  } catch (e) {}

  if (!base64) {
    if (Number(Platform.Version) > 30) {
      FileSystem.StorageAccessFramework.deleteAsync(filePath, { idempotent: true });
    }
    throw new Error("Error Downloading Wallpaper");
  }
  await FileSystem.writeAsStringAsync(filePath, base64, { encoding: "base64" });
}
