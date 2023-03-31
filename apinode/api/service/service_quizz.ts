
import {  QuizzHelper } from '../model/helper';
import { Quizz } from '../model/model_quizz';
export namespace QuizzService {
    export const getAllQuizz = (): Array<Quizz> => {
        return QuizzHelper.getAllQuizz();
    }

    export const createQuizz = (quizz : Quizz): void => {
        QuizzHelper.createQuizz(quizz);
    }

    export const getQuizzByID = (id:number): Quizz => {
        return QuizzHelper.getquizzByID(id);
    }

    

}
