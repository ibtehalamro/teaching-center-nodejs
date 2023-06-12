
import { JSON_RESPONSE, ResponseStatus } from '../../utils/Response.js';
import TeacherService from './../Service/TeacherService.js';
/**
 * Represents a class for performing CRUD operations on teachers.
 */
export default class TeacherController {
    teacherService = new TeacherService();

    saveNewTeacher = async (req, res) => {
        try {
            const response = await this.teacherService.saveNewTeacher(req);
            res.json(response);
        }
        catch (err) {
            const errorMsg = 'error: error occurred while saving student try again.';
            const response = JSON_RESPONSE(ResponseStatus.error, errorMsg);
            res.json(response);
        }
    };

    getTeachersList = async (req, res) => {
        try {
            const response = await this.teacherService.getTeachersList(req);
            res.json(response);
        }
        catch (err) {
            const errorMsg = 'error: error occurred while getting teachers list try again.';
            const response = JSON_RESPONSE(ResponseStatus.error, errorMsg);
            res.json(response);
        }
    };

    getTeacherSectionsByTeacherId = async (req, res) => {

        try {      
           const sections = await this.teacherService.getTeacherSectionsByTeacherId(req);
            console.log('sections', sections)
          res.json(sections);
        } catch (err) {
          const errorMsg = 'Error occurred while getting teacher sections. Please try again.';
          const response = JSON_RESPONSE(ResponseStatus.error, errorMsg);
          res.json(response);
        }
      };
      
}
