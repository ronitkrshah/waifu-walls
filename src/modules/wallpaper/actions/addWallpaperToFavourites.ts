import { db } from "~/database";
import { Wallpaper } from "~/models";
import { WallpaperService } from "~/services";

export async function addWallpaperToFavourites(wallpaper: Wallpaper) {
  let base64: string | null = null;
  try {
    base64 = await WallpaperService.getBase64FromImageURI(wallpaper.wallpaperUri);
  } catch (e) {}

  await db.runAsync(
    `INSERT OR IGNORE INTO wallpapers 
      (wallpaperId, wallpaperUri, wallpaperBase64, type, category, mimeType, extension) 
      VALUES (?, ?, ?, ?, ?, ?, ?);`,
    [
      wallpaper.wallpaperId,
      wallpaper.wallpaperUri,
      base64,
      wallpaper.type,
      wallpaper.category as string,
      wallpaper.mimeType,
      wallpaper.extension,
    ],
  );

  await db.runAsync(`INSERT OR IGNORE INTO favourites (wallpaperId) VALUES (?);`, [
    wallpaper.wallpaperId,
  ]);
}
