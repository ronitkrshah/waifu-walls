import { createWallpapersTable, TDBWallpaper } from "./wallpapers";
import { createFavouritesTable, TDBFavourites } from "./favourites";

export async function initialzeTables() {
  await createWallpapersTable();
  await createFavouritesTable();
}

export { TDBWallpaper, TDBFavourites };
