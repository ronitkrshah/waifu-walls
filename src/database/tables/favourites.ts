import { db } from "../db";

export type TDBFavourites = {
  id: number;
  wallpaperId: string;
};

export async function createFavouritesTable() {
  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS favourites(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      wallpaperId TEXT NOT NULL UNIQUE,
      FOREIGN KEY(wallpaperId) REFERENCES wallpapers(wallpaperId)
    );`,
  );
}
