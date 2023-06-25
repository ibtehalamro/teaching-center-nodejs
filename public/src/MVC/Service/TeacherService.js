
import { JSON_RESPONSE, ResponseStatus } from '../../utils/Response.js';
import Teacher from '../Model/Person/Teacher.js';
import TeacherRepository from '../Repository/Teacher/TeacherRepository.js';

class TeacherService {
    teacherRepository = new TeacherRepository();

    async saveNewTeacher(req) {
        try {
            const teacher = Teacher.getTeacherFromRequestBody(req.body);
            const result = await this.teacherRepository.saveNewTeacher(teacher);
            console.log('result', result)
            return JSON_RESPONSE(ResponseStatus.success, "Teacher added", { id: result });
        } catch (error) {
            if (error.code == "ER_DUP_ENTRY") {
                return JSON_RESPONSE(ResponseStatus.fail, "Teacher already exists.");
            } else {
                throw error;
            }
        }
    }

    async updateTeacherByTeacherId(req) {
        try {
            const teacher = Teacher.getTeacherFromRequestBody(req.body);
            const result = await this.teacherRepository.updateTeacherByTeacherId(teacher);
            return JSON_RESPONSE(ResponseStatus.success, "Teacher updated", { id: result });
        } catch (error) {
            if (error.code == "ER_DUP_ENTRY") {
                return JSON_RESPONSE(ResponseStatus.fail, "Teacher not updated.");
            } else {
                throw error;
            }
        }
    }

    async getTeachersList(req) {
        try {
            const teachers = await this.teacherRepository.getTeachersList();
            return JSON_RESPONSE(ResponseStatus.success, "Teachers list", Teacher.getTeacherJSONFromDBResult(teachers));
        } catch (error) {
            return JSON_RESPONSE(ResponseStatus.fail, "Can't reach Teachers list.");
        }
    }

    async getTeacherSectionsByTeacherId(req) {
        const { teacherId } = req.params;
        try {
            const sections = await this.teacherRepository.getTeacherSectionsByTeacherId(teacherId);
            return JSON_RESPONSE(ResponseStatus.success, "Teachers list", sections);
        } catch (error) {
            return JSON_RESPONSE(ResponseStatus.fail, "Can't reach Teachers list.");
        }
    }

    async getTeacherById(req) {
        const { teacherId } = req.params;
        try {
            const teacher = await this.teacherRepository.getTeacherById(teacherId);
            return JSON_RESPONSE(ResponseStatus.success, "Teacher data", Teacher.getTeacherJSONFromDBResult(teacher));
        } catch (error) {
            return JSON_RESPONSE(ResponseStatus.fail, "Can't reach Teacher data.");
        }
    }

    async sofDeleteTeacherByTeacherId (req){
        const { teacherId } = req.params;
        try {
            const teacher = await this.teacherRepository.sofDeleteTeacherByTeacherId(teacherId);
            return JSON_RESPONSE(ResponseStatus.success, "Teacher deleted", teacher);
        } catch (error) {
            return JSON_RESPONSE(ResponseStatus.fail, "Can't delete Teacher .");
        }
    }
}
export default TeacherService;
