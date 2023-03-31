import express from 'express';
import quizz from './route/quizz';
const router = express.Router();
router.use('/quizz', quizz);
export default router;