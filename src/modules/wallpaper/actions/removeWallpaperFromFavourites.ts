import { db } from "~/database";
import { Wallpaper } from "~/models";

export async function removeWallpaperFromFavourites(wallpaper: Wallpaper) {
  await db.execAsync(`DELETE FROM favourites WHERE wallpaperId = '${wallpaper.wallpaperId}';`);
  await db.execAsync(`DELETE FROM wallpapers WHERE wallpaperId = '${wallpaper.wallpaperId}';`);
}
