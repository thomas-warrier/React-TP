import { QuizzQuestion } from './model_quizz_question';
import { database } from '../config/database';
import { AnswerQuizzHelper } from '../model/helper_answer';


export namespace QuestionQuizHelper {
    export const getAllQuestionQuizzs = (): Array<QuizzQuestion> => {
        const questions = database.prepare('SELECT * FROM question_quiz').all();

        for (const question of questions) {
            question.answers = AnswerQuizzHelper.getAnswerQuizForQuestion(question.id);
        }

        return questions;
    }


    export const createQuestionQuizz = (questionQuizz: QuizzQuestion): void => {
        const res = database.prepare('INSERT INTO question_quiz(question, quizId) VALUES(?, ?)')
            .run([questionQuizz.question, questionQuizz.id]);

        
        for (let answer of questionQuizz.answer) {
        
            answer.question = res.lastInsertRowid;
            AnswerQuizzHelper.createAnswerQuizz(answer);
        }
    }
    export const getQuestionQuizByID = (id: number): QuizzQuestion => {
        const question = database.prepare('SELECT * FROM question_quiz WHERE id = ?')
            .get([id]);

        question.answers = AnswerQuizzHelper.getAnswerQuizForQuestion(question.id);


        return question;
    }

    export const getAllQuestionQuizForQuiz = (idQuiz: number): Array<QuizzQuestion> => {
        const questions = database.prepare('SELECT * FROM question_quiz where quizId = ?').all([idQuiz]);

        for (const question of questions) {
            question.answers = AnswerQuizzHelper.getAnswerQuizForQuestion(question.id);
        }

        return questions;
    }
}