import { ExamNS } from './exam';
import { MongoDB, FromMongoData, ToMongoData } from '../lib/mongodb';

export class ExamDALMongo implements ExamNS.DAL {
    constructor(
        private db: MongoDB
    ) { }

    async init () {

    }

    private col_examShape = this.db.collection('examShape');
    private col_examResult = this.db.collection('examResult');

    async CreateExamShape(params: ExamNS.ExamShape) {
        const doc = await 
    }
}