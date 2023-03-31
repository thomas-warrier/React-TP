import { QuizzAnswer } from './model_quizz_answer';
import { database } from '../config/database';


export namespace AnswerQuizzHelper {
    export const getAllAnswerQuizs = (): Array<QuizzAnswer> => {
        return database.prepare('SELECT * FROM answer_quiz').all();
    }


    export const createAnswerQuizz = (answerQuiz: QuizzAnswer): void => {
        const res = database.prepare('INSERT INTO answer_quiz(answer, questionId, isCorrect) VALUES(?, ?, ?)')
            .run([answerQuiz.answer, answerQuiz.question, answerQuiz.isRight]);
    }
    export const getAnswerQuizByID = (id: number): QuizzAnswer => {
        return database.prepare('SELECT * FROM answer_quiz WHERE id = ?')
            .get([id]);
    }

    export const getAnswerQuizForQuestion = (idQuestion: number): Array<QuizzAnswer> => {
        return database.prepare('SELECT * FROM answer_quiz WHERE questionId = ?')
            .all([idQuestion]);
    }
}