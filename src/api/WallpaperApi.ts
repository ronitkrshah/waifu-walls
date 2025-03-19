import { TWallpaperCategory, TWallpaperType } from "./types";

type TManyWallpaperResponse = {
  files: string[];
};

export class WallpaperApi {
  private static _api = "https://api.waifu.pics";

  public static async getWallpaperList(
    type: TWallpaperType,
    category: TWallpaperCategory,
  ): Promise<TManyWallpaperResponse> {
    const response = await fetch(`${this._api}/many/${type}/${category}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        exclude: [],
      }),
    });

    return await response.json();
  }
}
