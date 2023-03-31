import SQLiteDatabase, { Database } from 'better-sqlite3';
let database: Database;
const connection = (): Promise<void> => {
    return new Promise((resolve) => {
        database = new SQLiteDatabase('data.db');
        loadDatabase(database);
        return resolve();
    });
}
const loadDatabase = (db: Database): void => {
    db.prepare(`
        CREATE TABLE IF NOT EXISTS quizz
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR NOT NULL,
            nombrequestion INTEGER NOT NULL
        )
        `).run();

        db.prepare(`
        CREATE TABLE IF NOT EXISTS question_quiz
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question VARCHAR NOT NULL,
            quizId INTEGER NOT NULL,
            FOREIGN KEY (quizId) REFERENCES quiz(id)
        )
        `).run();

        db.prepare(`
        CREATE TABLE IF NOT EXISTS answer_quiz
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            answer VARCHAR NOT NULL,
            questionId INTEGER NOT NULL,
            isCorrect INTEGER NOT NULL,
            FOREIGN KEY (questionId) REFERENCES question_quiz(id)
        )
        `).run();

        db.prepare(`
        CREATE TABLE IF NOT EXISTS score_quiz
        (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR NOT NULL,
            score INTEGER NOT NULL,
            quizId INTEGER NOT NULL,
            FOREIGN KEY (quizId) REFERENCES quiz(id)
        )
        `).run();
}
export { connection, database };
