import {
  TWallpaperCategory,
  TWallpaperType,
  WallpaperApi,
  WallpaperCategoryNSFW,
  WallpaperCategorySFW,
} from "~/api";
import { Wallpaper } from "~/models";
import Base64 from "react-native-base64";

export class WallpaperService {
  private static _isFetching = false;

  /**
   * Get a list of wallpapers
   */
  public static async getWallpapers(type: TWallpaperType, category: TWallpaperCategory) {
    if (this._isFetching) {
      return [];
    }
    this._isFetching = true;
    const wallpapers = await WallpaperApi.getWallpaperList(type, category);
    const wallpaperIds = wallpapers.files.map((item) => item.split("/").pop()!.split(".").shift());

    this._isFetching = false;
    return wallpapers.files.map((uri, index) => {
      const fileExtension = uri.split(".").pop() || "jpg";
      const mimeType = fileExtension === "png" ? "image/png" : "image/jpeg";
      return new Wallpaper(
        wallpaperIds[index]!,
        uri,
        type,
        category,
        fileExtension,
        mimeType,
        false,
        undefined,
      );
    });
  }

  /**
   * Get Base64 from uri image
   */
  public static async getBase64FromImageURI(imageUri: string): Promise<string> {
    const response = await fetch(imageUri);
    const buffer = await response.arrayBuffer();
    return Base64.encodeFromByteArray(new Uint8Array(buffer));
  }

  /**
   * Get Random Category
   */
  public static getRandomCategory(type: TWallpaperType) {
    const categories = type === "sfw" ? WallpaperCategorySFW : WallpaperCategoryNSFW;
    const randomNumber = Math.floor(Math.random() * Object.keys(categories).length);
    return Object.entries(categories)[randomNumber][1];
  }
}
