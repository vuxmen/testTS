import rand from "../lib/rand";
import { ExamNS } from "./exam";

export class ExamBLLBase implements ExamNS.BLL {
    constructor(
        private dal: ExamNS.DAL
    ) {
        
    }

    async init() {

    }

    async CreateExamShape() {
        const examShape: ExamNS.ExamShape = {
            'Blood': {
                location_id: ['P101', 'P104', 'P105'],
                items: [
                    {
                        id: rand.alphabet(6),
                        exam_type: 'Blood',
                        name: 'Dinh luong Glucose',
                        unit: 'mmol/L',
                        normal_index: '3,9 - 6,4',
                        exam_index: '',
                        c_time: '2021-03-01',
                        m_time: []
                    },
                    {
                        id: rand.alphabet(6),
                        exam_type: 'Blood',
                        name: 'Dinh luong Ure mau',
                        unit: 'mmol/L',
                        normal_index: '2,5 - 7,5',
                        exam_index: '',
                        c_time: '2021-03-01',
                        m_time: []
                    },
                ]
            },
            'Urine': {
                location_id: ['P102', 'P102', 'P103'],
                items: [
                    {
                        id: rand.alphabet(6),
                        exam_type: 'Urine',
                        name: 'Dinh luong Urine',
                        unit: 'mmol/L',
                        normal_index: '3,9 - 6,4',
                        exam_index: '',
                        c_time: '2021-03-01',
                        m_time: ['2021-03-04']
                    },
                    {
                        id: rand.alphabet(6),
                        exam_type: 'Urine',
                        name: 'Dinh luong Ure Urine',
                        unit: 'mmol/L',
                        normal_index: '2,5 - 7,5',
                        exam_index: '',
                        c_time: '2021-03-01',
                        m_time: []
                    },
                ]
            },
        };
        await this.dal.CreateExamShape(examShape);
        return examShape;
    }
}