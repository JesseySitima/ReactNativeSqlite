import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('studentsAssessmentScores.db');

const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS assessmentData (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        standard TEXT,
        sample TEXT,
        weekKey TEXT,
        type TEXT,
        score INTEGER,
        totalQuestions INTEGER
      );`
    );
  });
};

export { db, initializeDatabase };
