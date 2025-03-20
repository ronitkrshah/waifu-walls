import * as SQLite from "expo-sqlite";

export let db: SQLite.SQLiteDatabase;

export async function initializeDatabase() {
  db = await SQLite.openDatabaseAsync("waifu.db");
}
