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

    async getCourseSectionsList(courseId) {
        try {
            const courseSections = await this.courseRepository.getCourseSectionsList(courseId);
            return JSON_RESPONSE(ResponseStatus.success, "Course sections list", courseSections);
        } catch (error) {
            throw error;
        }
    }

 
}
export default CourseService;
