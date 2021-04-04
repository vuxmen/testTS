export namespace ExamNS {
    export type LocationID = 'P101' | 'P102' | 'P103' | 'P104' | 'P105';
    export type ExamType = 'Blood' | 'Urine' | 'Microbiological' | 'Biochemical';

    interface ExamItem {
        id: string;
        exam_type: ExamType;
        name: string;
        unit: string;
        normal_index: string;
        exam_index: '';
        c_time: string;
        m_time: string[];
    }

    interface AddExamItemParams {
        exam_type: ExamType;
        name: string;
        unit: string;
        normal_index: string;
        exam_index: ''
    }

    interface ModifyExamItemParams {
        id: string;
        exam_type: ExamType;
        name: string;
        unit: string;
        normal_index: string;
    }

    interface DeleteExamItemParams {
        id: string;
        exam_type: ExamType;
    }

    export type GetExamList = {
        [key in ExamType]? : ExamItem[]
    }

    // interface GetExamListParams {
    //     location_id: LocationID,
    //     exam_type: ExamType
    // }

    interface CreateExamShapeParams {
        exam_type: ExamType
    }

    export type ExamShape = {
        [key in ExamType]? : {
            location_id: LocationID[],
            items: ExamItem[]
        }
    }

    interface AddPatientExamResult {

    }

}

let exampleObj: ExamNS.ExamShape = {
    'Blood': {
        location_id: ['P101', 'P104', 'P105'], 
        items: [
            {   
                id: 'xyz456',
                exam_type: 'Blood', 
                name: 'Dinh luong Glucose',
                unit: 'mmol/L',
                normal_index: '3,9 - 6,4',
                exam_index:'',
                c_time: '2021-03-01',
                m_time: []
            },
            {
                id: 'abc123',
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
                id: 'xyz456',
                exam_type: 'Urine',
                name: 'Dinh luong Urine',
                unit: 'mmol/L',
                normal_index: '3,9 - 6,4',
                exam_index: '',
                c_time: '2021-03-01',
                m_time: ['2021-03-04']
            },
            {
                id: 'abc123',
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

console.log(exampleObj);




