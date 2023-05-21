import { JSON_RESPONSE, ResponseStatus } from '../../utils/Response.js';
import CourseService from './../Service/CourseService.js';
export default class CourseController {
    courseService = new CourseService();

    constructor() {
    }

    getCourseTypes = async (req, res) => {
        try {
            const response = await this.courseService.getCourseTypes();   
            res.json(response);
        }
        catch (err) {
            const response = JSON_RESPONSE(ResponseStatus.error, "error: error occurred while course types try again.");
            res.json(response);
        }
    };

    saveNewCourseData = async (req, res) => {
        try {
            const response = await this.courseService.saveNewCourseData(req);
            res.json(response);
        }
        catch (err) {
            res.json( JSON_RESPONSE(ResponseStatus.error, "Course creation faced a problem"));
        }
    };
    
    getCoursesList = async (req, res) => {
        try {
            const response = await this.courseService.getCoursesList(req);
            res.json(response);
        }
        catch (err) {
            res.json(JSON_RESPONSE(ResponseStatus.error, "Error while getting courses list."));
        }
    };
//     getCourseById = (req, res) => {
//         const { id } = req.params;
//         const course = this.courseService.get(parseInt(id));
//         course ? res.json({ status: ResponseStatus.success, data: course }) : res.json({ status: ResponseStatus.fail, message: `course with id ${id} cannot be found` });
//     };
//     deleteCourseById = (req, res) => {
//         const { id } = req.body;
//         const isDeleted = this.courseService.delete(id);
//         isDeleted ? res.json({ status: ResponseStatus.success }) : res.json({ status: ResponseStatus.error });
//     };
//     updateCourse = (req, res) => {
//         // const { course } = req.body;
//         // const { id } = req.params;
//         // console.log("------Course", course)
//         // const name = new Name(course.name.firstName, course.name.secondName, course.name.lastName)
//         // const address = new Address(course.address.city);
//         // const courseObject = new Course(name);
//         // const updatedCourse = this.courseService.update(parseInt(id), courseObject);
//         // updatedCourse ? res.json({ status: ResponseStatus.success, data: updatedCourse }) : res.json({ status: ResponseStatus.fail });
//     };
//     getCourseSectionsList = async (req, res) => {
//         try {
//             const { id } = req.params;
//             const response = await this.courseService.getCourseSectionsList(id);
//             res.json(response);
//         }
//         catch (err) {
//             res.json(JSON_RESPONSE(ResponseStatus.error, "error from catch"));
//         }
//     };
}
