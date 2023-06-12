import con from '../../../server/DB_connection.js';
import { GET_COURSES_LIST, GET_COURSE_SECTION_BY_COURSE_ID, GET_COURSE_TYPES, SAVE_NEW_COURSE_DATA } from './CourseQueries.js';
class CourseRepository {

    constructor(){

    }
    getCourseTypes = () => {
        return new Promise((resolve, reject) => {
            con.query(GET_COURSE_TYPES, (error, result) => {
                if (error) { 
                    console.error(`Error occurred while fetching course types ` , error);
                    reject(error);
                } else {
                    console.log(`Successfully fetched course types `, result);
                    resolve(result);
                }
            });
        });
    }

    saveNewCourseData(course) {
        let pro = new Promise((resolve, reject) => {
            con.query(SAVE_NEW_COURSE_DATA, [course.getName(), course.getType()], (error, result) => {
                if (error) {
                    console.error(`Error occurred while saving new course `, error);
                    reject(error);
                } else {
                    console.log(`Successfully saved course data `, result);
                    resolve(result);
                }
            });
        });
        return pro;
    }

    getCoursesList() {
        let pro = new Promise((resolve, reject) => {
            con.query(GET_COURSES_LIST, (error, result) => {
                if (error) {
                    console.error(`Error occurred while getting courses list `, error);
                    reject(error);
                } else {
                    console.log(`Successfully fetched courses list `, result);
                    resolve(result);
                }
            });
        });
        return pro;
    }

    getCourseSectionsList(courseId) {
        let pro = new Promise((resolve, reject) => {
            con.query(GET_COURSE_SECTION_BY_COURSE_ID, [courseId], (error, result) => {
                if (error) {
                    console.error(`Error occurred while getting course section list `, error);
                    reject(error);
                } else {
                    console.log(`Successfully fetched course section list `, result);
                    resolve(result);
                }
            });
        });
        return pro;
    }

    

//     update(id, course) {
//         throw new Error("Method not implemented.");
//     }
//     getById(id) {
//         throw new Error("Method not implemented.");
//     }
//     deleteById(id) {
//         throw new Error("Method not implemented.");
//     }
//     constructor() { }
//     getByCourseNameAndTeacherId(name) {
//         const sql = `SELECT * FROM courses WHERE name = ? LIMIT 1`;
//         let pro = new Promise((resolve, reject) => {
//             con.query(sql, [name], (err, result) => {
//                 if (err)
//                     throw err;
//                 resolve(result);
//             });
//         });
//         return pro;
//     }

//     getSectionsList(id) {
//         const sql = `SELECT * FROM section_course sc INNER JOIN sections s on sc.sectionId=s.id 
//     INNER join teachers t on s.teacherId=t.id
//     where sc.courseId=?`;
//         let pro = new Promise((resolve, reject) => {
//             con.query(sql, [id], (err, result) => {
//                 if (err)
//                     throw err;
//                 resolve(result);
//             });
//         });
//         return pro;
//     }
}
export default CourseRepository;
