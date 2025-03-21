import {
  TWallpaperCategory,
  TWallpaperType,
  WallpaperApi,
  WallpaperCategoryNSFW,
  WallpaperCategorySFW,
} from "~/api";
import { Wallpaper } from "~/models";
import Base64 from "react-native-base64";
import { db } from "~/database";

const mimeTypes = [
  {
    extension: "png",
    type: "image/png",
  },
  {
    extension: "jpg,jpeg",
    type: "image/jpeg",
  },
  {
    extension: "gif",
    type: "image/gif",
  },
];

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
      const mimeType =
        mimeTypes.find((item) => item.extension.includes(fileExtension.toLowerCase()))?.type ||
        "image/jpeg";

      return new Wallpaper(
        wallpaperIds[index]!,
        uri,
        type,
        category,
        fileExtension,
        mimeType,
        undefined,
      );
    });
  }

  /**
   * Get wallpaper with id
   */
  public static getWallpaperWithId(
    id: string,
    type: TWallpaperType,
    category: TWallpaperCategory,
    extension: string,
  ) {
    const imageUrl = "https://i.waifu.pics/" + id + "." + extension;

    const mimeType =
      mimeTypes.find((item) => item.extension.includes(extension))?.type || "image/jpeg";

    return new Wallpaper(id, imageUrl, type, category, extension, mimeType, undefined);
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

  /**
   * Get favourite wallpapers
   */
  public static async getFavouriteWallpapers() {
    return await db.getAllAsync<Wallpaper>(`
      SELECT wallpapers.*
      FROM wallpapers
      JOIN favourites ON wallpapers.wallpaperId = favourites.wallpaperId;
    `);
  }
}
