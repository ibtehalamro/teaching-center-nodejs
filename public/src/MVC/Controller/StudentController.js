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

    getStudentAssignedSections = async (req, res) => {
        try {
            const studentSections = await this.studentService.getStudentAssignedSections(req);
            res.json(studentSections);
        }
        catch (err) {
            const response = JSON_RESPONSE(ResponseStatus.error, `error: error occurred while getting student with id => ${id} try again.`);
            res.json(response);
        }
    }

    getAllSectionsWithStudentStatusPromise = async (req, res) => {
        try {
            const sections = await this.studentService.getAllSectionsWithStudentStatusPromise(req);
            res.json(sections);
        }
        catch (err) {
            console.log('controller err', err)
            const response = JSON_RESPONSE(ResponseStatus.error, `error: error occurred while getting sections try again.`);
            res.json(response);
        }
    }

    assignSectionsToStudent = async (req, res) => {
        try {
            const sections = await this.studentService.assignSectionsToStudent(req);
            res.json(sections);
        }
        catch (err) {
            console.log('controller err', err)
            const response = JSON_RESPONSE(ResponseStatus.error, `error: error occurred while getting sections try again.`);
            res.json(response);
        }
    }

    softDeleteStudentByStudentId = async (req, res) => {
        try {
            const result = await this.studentService.softDeleteStudentByStudentId(req);
            res.json(result);
        }
        catch (err) {
            const response = JSON_RESPONSE(ResponseStatus.error, `error: error occurred while deleting student with id => ${id} try again.`);
            res.json(response);
        }
    }
}
