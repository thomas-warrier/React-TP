export interface QuizzAnswer {
    id: number;
    isRight : boolean;
    question : number | bigint;
    answer : string;
}