import { JSON_RESPONSE, ResponseStatus } from '../../utils/Response.js';
import StudentService from './../Service/StudentService.js';

export default class StudentController {
    studentService = new StudentService();

    constructor() {
    }

    saveNewStudent = async (req, res) => {
        try {
            const response = await this.studentService.saveNewStudent(req);
            res.json(response);
        }
        catch (err) {
            const response = JSON_RESPONSE(ResponseStatus.error, "error: error occurred while saving student try again.");
            res.json(response);
        }
    };


    getStudentsList = async (req, res) => {
        try {
            const response = await this.studentService.getStudentsList(req);
            res.json(response);
        }
        catch (err) {
            const response = JSON_RESPONSE(ResponseStatus.error, "error: error occurred while getting students try again.");
            res.json(response);
        }
    };

    getStudentById = async (req, res) => {
        const { id } = req.params;
        try {
            const response = await this.studentService.getStudentById(parseInt(id));
            res.json(response);
        }
        catch (err) {
            const response = JSON_RESPONSE(ResponseStatus.error, `error: error occurred while getting student with id => ${id} try again.`);
            res.json(response);
        }
    };


    updateStudentByStudentId = async (req, res) => {
        const { id } = req.params;
        try {
            const updatedStudent = await this.studentService.updateStudentByStudentId(req);
            res.json(updatedStudent);
        }
        catch (err) {
            const response = JSON_RESPONSE(ResponseStatus.error, `error: error occurred while getting student with id => ${id} try again.`);
            res.json(response);
        }
    };

    // deleteStudentById = (req, res) => {
    //     const { id } = req.params;
    //     const isDeleted = this.studentService.delete(parseInt(id));
    //     isDeleted ? res.json({ status: ResponseEnums.success }) : res.json({ status: ResponseEnums.error });
    // };

    // getSectionsRelatedToStudent = async (req, res) => {
    //     const { id: studentId } = req.params;
    //     const result = await this.studentService.getSectionsRelatedToStudent(studentId);
    //     result ? res.json(result) : res.json({ status: ResponseEnums.fail });
    // };
    // getNumberOfStudentsNotDeleted = async (req, res) => {
    //     const result = await this.studentService.getNumberOfStudentsNotDeleted();
    //     result ? res.json(result) : res.json({ status: ResponseEnums.fail });
    // };
}
