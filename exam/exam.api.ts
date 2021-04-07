import * as express from 'express';
import { HttpError, HttpStatusCodes, HttpParamValidators } from "../lib/http";
import { ExamNS } from './exam';

export function ExamAPI(
    ExamBLL: ExamNS.BLL
) {
    const app = express();
    app.get('/exam/createShapeFakeAPI', async (req, res) => {
        const examShape = await ExamBLL.CreateExamShape();
        res.json(examShape);
    });
}