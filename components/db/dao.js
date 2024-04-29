import { getConnection } from './db';

export const createNote = async (title, content) => {
  try {
    const db = await getConnection();
    if (db) {
      await db.transaction(async tx => {
        const result = await tx.executeSql('SELECT * FROM notes');
        console.log('Select query result:', result);
        if (result) {
          await tx.executeSql(`INSERT INTO notes (title, content) VALUES (?, ?)`, [title, content]);
          console.log('Note inserted successfully');
        } else {
          console.log('Select query returned null');
        }
      });
    } else {
      console.log('getConnection returned null');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export const readNotes = async () => {
  const db = await getConnection();
  const notes = await db.transaction(async tx => {
    const results = await tx.executeSql(`SELECT * FROM notes`);
    return results.rows._array;
  });
  return notes;
}

export const updateNote = async (id, title, content) => {
  const db = await getConnection();
  await db.transaction(async tx => {
    await tx.executeSql(`UPDATE notes SET title = ?, content = ? WHERE id = ?`, [title, content, id]);
  });
}

export const deleteNote = async (id) => {
  const db = await getConnection();
  await db.transaction(async tx => {
    await tx.executeSql(`DELETE FROM notes WHERE id = ?`, [id]);
  });
}
