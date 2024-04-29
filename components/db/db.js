import { openDatabase } from 'react-native-sqlite-storage';

const database_name = "MyNotes.db";

const createTable = async () => {
  const db = await openDatabase(database_name);
  await db.transaction(async tx => {
    await tx.executeSql(
      `CREATE TABLE IF NOT EXISTS notes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        content TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );`
    );
  });
}

const getConnection = async () => {
  return await openDatabase(database_name);
}

export { createTable, getConnection };
