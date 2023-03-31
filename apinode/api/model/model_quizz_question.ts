import { QuizzAnswer } from "./model_quizz_answer";

export interface QuizzQuestion {
    id: number;
    question: string;
    answer : QuizzAnswer[];
}