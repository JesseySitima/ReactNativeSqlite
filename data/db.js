import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('studentScores.db');

export const initDatabase = () => {
    db.transaction((tx) => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS scores (id INTEGER PRIMARY KEY NOT NULL, name TEXT, score INTEGER)'
        );
    });
};

export default db;