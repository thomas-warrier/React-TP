import { Request, Response } from 'express';
import { QuizzService } from '../service/service_quizz';
const route = require('express').Router();

route.get('/',
    (req: Request, res: Response) => {
        const quizzs = QuizzService.getAllQuizz();
        res.send(quizzs);
    });
    route.get('/:id',
    (req: Request, res: Response) => {
        const quizz = QuizzService.getQuizzByID(parseInt(req.params.id));
        res.send(quizz);
    });
route.post('/create',
    (req: Request, res: Response) => {
        const quizz  = req.body;
        QuizzService.createQuizz(quizz);
        res.sendStatus(201);
    })

    route.post('/createanswer',
    (req: Request, res: Response) => {
        const quizz  = req.body;
        QuizzService.createQuizz(quizz);
        res.sendStatus(201);
    })



export default route;