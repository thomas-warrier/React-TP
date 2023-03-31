
import { database } from '../config/database';
import { Quizz } from './model_quizz';
export namespace QuizzHelper {
    export const getAllQuizz = (): Array<Quizz> => {
        return database.prepare('SELECT * FROM quizz').all();
    }
    export const getquizzByID = (id:number): Quizz => {
        return database.prepare('SELECT * FROM quizz WHERE id = ?').get([id]);
    }
    export const createQuizz = (quizz: Quizz): void => {
        database.prepare('INSERT INTO quizz(id,title,nombrequestion) VALUES(?,?,?)')
                .run([quizz.id,quizz.title,quizz.nombrequestion]);
    } 
}



