import StudentRepository from './../Repository/Student/StudentRepository.js';
import Student from './../Model/Person/Student.js';
import { JSON_RESPONSE, ResponseStatus } from '../../utils/Response.js';

class StudentService {
    studentRepository = new StudentRepository();
    constructor() {
    }
    
    async saveNewStudent(req) {
        try {
            const student = Student.getStudentFromRequestBody(req.body);
            const result = await this.studentRepository.saveNewStudent(student);
            return JSON_RESPONSE(ResponseStatus.success, "Student added", { id: result });
        } catch (error) {
            if (error.code == "ER_DUP_ENTRY") {
                return JSON_RESPONSE(ResponseStatus.fail, "Student already exists.");
            } else {
                throw error;
            }
        }
    }

    async getStudentsList(req) {
        try {
            const students = await this.studentRepository.getStudentsList();
            return JSON_RESPONSE(ResponseStatus.success, "Students list", Student.getStudentJSONFromDBResult(students));
        } catch (error) {
            return JSON_RESPONSE(ResponseStatus.fail, "Can't reach students list.");
        }
    }

    async getStudentById(id) {
        try {
            let result = await this.studentRepository.getStudentById(id);
            if (result.length > 0) {
                return JSON_RESPONSE(ResponseStatus.success, "Student data",Student.getStudentJSONFromDBResult(result)[0]);
            }
            return JSON_RESPONSE(ResponseStatus.fail, "No Student found");
        }
        catch (error) {
            return JSON_RESPONSE(ResponseStatus.error, "error getting Student  ");
        }
    }

    async updateStudentByStudentId(req) {
        const student = Student.getStudentFromRequestBody(req.body);
        try {
            const result = await this.studentRepository.updateStudentByStudentId(student);
            if (result.affectedRows > 0) {
                return JSON_RESPONSE(ResponseStatus.success, "Student updated", { ...result });
            }
            return JSON_RESPONSE(ResponseStatus.fail, "Student id not found");
        }
        catch (err) {
            if (err.code == "ER_DUP_ENTRY") {
                return JSON_RESPONSE(ResponseStatus.fail, "Student with same name is already exists.");
            }
            return JSON_RESPONSE(ResponseStatus.error, "Error occurred while updating student.");
        }
    }

    async getStudentAssignedSections(req){
        const { studentId } = req.params;
        try {
            const studentSections = await this.studentRepository.getStudentAssignedSections(studentId);
            return JSON_RESPONSE(ResponseStatus.success, "Student sections list", studentSections);
        } catch (error) {
            console.log('error', error)
            return JSON_RESPONSE(ResponseStatus.fail, "Can't reach student sections list.");
        }
    }

    async getAllSectionsWithStudentStatusPromise(req){
        const {studentId}=req.params;
        try {
            const sections = await this.studentRepository.getAllSectionsWithStudentStatusPromise(studentId);
            return JSON_RESPONSE(ResponseStatus.success, "sections list", sections);
        } catch (error) {
            console.log('error', error)
            return JSON_RESPONSE(ResponseStatus.fail, "Can't reach sections list.");
        }
    }

    async assignSectionsToStudent(req){
        const {studentId}=req.params;
        const {selectedSection,discount}=req.body;
        try {
            const sections = await this.studentRepository.assignSectionsToStudent(studentId,selectedSection,discount);
            return JSON_RESPONSE(ResponseStatus.success, "sections list", sections);
        } catch (error) {
            console.log('error', error)
            return JSON_RESPONSE(ResponseStatus.fail, "Can't reach sections list.");
        }
    }
}
export default StudentService;