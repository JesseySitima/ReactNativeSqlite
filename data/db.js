import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('studentsCarAppScores.db');

const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS carAppScores (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        standard TEXT,
        sample TEXT,
        weekKey TEXT,
        studentName TEXT,
        teacherName TEXT,
        MainaAMalemboScore INTEGER DEFAULT 0,
        MaliwuScore INTEGER DEFAULT 0,
        MaphatikizoScore INTEGER DEFAULT 0,
        MawuScore INTEGER DEFAULT 0,
        totalScore INTEGER DEFAULT 0,
        totalQuestions INTEGER DEFAULT 0
      );`
    );
  });
};

export { db, initializeDatabase };
