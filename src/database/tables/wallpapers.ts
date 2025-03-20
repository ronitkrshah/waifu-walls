import { db } from "../db";

export type TDBWallpaper = {
  id: number;
  wallpaperId: string;
  wallpaperUri: string;
  wallpaperBase64?: string;
  wallpaperType: string;
  wallpaperCategory: string;
  mimeType: string;
  extension: string;
};

export async function createWallpapersTable() {
  await db.execAsync(
    `CREATE TABLE IF NOT EXISTS wallpapers(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      wallpaperId TEXT NOT NULL UNIQUE,
      wallpaperUri TEXT NOT NULL,
      wallpaperBase64 TEXT,
      type TEXT NOT NULL,
      category TEXT NOT NULL,
      mimeType TEXT NOT NULL,
      extension TEXT NOT NULL
    );`,
  );
}
