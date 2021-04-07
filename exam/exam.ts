export namespace ExamNS {
    export type LocationID = 'P101' | 'P102' | 'P103' | 'P104' | 'P105';
    export type ExamType = 'Blood' | 'Urine' | 'Microbiological' | 'Biochemical';

    export interface ExamItem {
        id: string;
        exam_type: ExamType;
        name: string;
        unit: string;
        normal_index: string;
        exam_index: '';
        c_time: string;
        m_time: string[];
    }

    export interface AddExamItemParams {
        exam_type: ExamType;
        name: string;
        unit: string;
        normal_index: string;
        exam_index: ''
    }

    export interface ModifyExamItemParams {
        id: string;
        exam_type: ExamType;
        name: string;
        unit: string;
        normal_index: string;
    }

    export interface DeleteExamItemParams {
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


    export type ExamShape = {
        [key in ExamType]? : {
            location_id: LocationID[],
            items: ExamItem[]
        }
    }

    interface AddPatientExamResult {

    }

    export interface BLL {
        CreateExamShape(): Promise<ExamShape>;
        AddExamItem(params: AddExamItemParams): Promise<ExamItem>;
        GetExamShape(): Promise<ExamShape>;
        
    }

    export interface DAL {
        CreateExamShape(params: ExamShape): Promise<void>;
        AddExamItem(params: AddExamItemParams): Promise<ExamItem>;
        GetExamShape(): Promise<ExamShape>;
    }

}





