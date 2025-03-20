import { db } from "~/database";
import { Wallpaper } from "~/models";

export async function addWallpaperToFavourites(wallpaper: Wallpaper) {
  await db.runAsync(
    `INSERT OR IGNORE INTO wallpapers 
      (wallpaperId, wallpaperUri, type, category, mimeType, extension) 
      VALUES (?, ?, ?, ?, ?, ?);`,
    [
      wallpaper.wallpaperId,
      wallpaper.wallpaperUri,
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
