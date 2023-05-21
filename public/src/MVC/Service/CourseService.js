// import Common from "../Model/common/common.js";
// import ResponseStatus from "../Enums/ResponseStatus.js";
// import Course from "../Model/Course/Course.js";
import { JSON_RESPONSE, ResponseStatus } from '../../utils/Response.js';
import Course from '../Model/Course/Course.js';
import CourseRepository from '../Repository/Course/CourseRepository.js';

class CourseService {
    courseRepository =new CourseRepository();
    constructor() {
     }

     async getCourseTypes(){
        try {
            let result = await this.courseRepository.getCourseTypes();
            let courseTypesJSON = this.getCourseTypesJSON(result);
             if (courseTypesJSON.length > 0) {
                return JSON_RESPONSE(ResponseStatus.success, "Course Types", courseTypesJSON);
            }
            return JSON_RESPONSE(ResponseStatus.fail, "Course Types not found");
        }
        catch (error) {
           throw error;
        }
     }

     getCourseTypesJSON(result){
       return result?.map(type=>{return {value:type.value,label:type.description};});
        
     }

    async saveNewCourseData(req) {
        try {
            const course =Course.getCourseFromRequestBody(req.body);
            const result = await this.courseRepository.saveNewCourseData(course);
            return JSON_RESPONSE(ResponseStatus.success, "Course added", { id: result });
        } catch (error) {
            if (error.code == "ER_DUP_ENTRY") {
                return JSON_RESPONSE(ResponseStatus.error, "Course already exists.");
            } else {
                throw error;
            }
        }
    }

    async getCoursesList(req) {
        try {
            const courses = await this.courseRepository.getCoursesList();
            return JSON_RESPONSE(ResponseStatus.success, "Course list", courses);
        } catch (error) {
            throw error;
        }
    }

//     update(id, course) {
//         return this.courseRepository.update(id, course);
//     }
//     delete(id) {
//         return this.courseRepository.deleteById(id);
//     }
//     get(id) {
//         return this.courseRepository.getById(id);
//     }

//     async getCourseSectionsList(id) {
//         const courses = await this.courseRepository.getSectionsList(id);
//         return JSON_RESPONSE(ResponseStatus.success, "Course list", courses);
//     }
}
export default CourseService;
