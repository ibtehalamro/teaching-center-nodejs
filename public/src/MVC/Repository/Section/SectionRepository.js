import con from '../../../server/DB_connection.js';
import {sectionQueries} from './SectionQueries.js';

class SectionRepository {
        constructor() { }
//     update(id, section) {
//         throw new Error("Method not implemented.");
//     }
//     getById(id) {
//         throw new Error("Method not implemented.");
//     }
//     deleteById(id) {
//         throw new Error("Method not implemented.");
//     }
//     getBySectionNameAndTeacherId(name) {
//         const sql = `SELECT * FROM sections WHERE name = ? LIMIT 1`;
//         let pro = new Promise((resolve, reject) => {
//             con.query(sql, [name], (err, result) => {
//                 if (err)
//                     throw err;
//                 resolve(result);
//             });
//         });
//         return pro;
//     }
//     add(section) {
//         const sql = "START TRANSACTION; INSERT INTO sections( startDate, endDate, startTime, endTime, courseId, teacherId) VALUES (?,?,?,?,?,? );"
//             + "INSERT INTO section_course( sectionId, courseId) VALUES (?,?);" + "COMMIT;";
//         // const sql = `INSERT INTO sections (courseId , startDate,endDate,startTime,endTime,teacherId ) VALUES (?,?,?,?,?,? )`;
//         let pro = new Promise((resolve, reject) => {
//             con.query(sql, [section.getStartDate(), section.getEndDate(), section.getStartTime(), section.getEndTime(), section.getCourseId(), section.getTeacherId(), section.getId(), section.getCourseId()], (err, result) => {
//                 if (err)
//                     throw err;
//                 resolve(result);
//             });
//         });
//         return pro;
//     }
    getSectionsList() {
        let pro = new Promise((resolve, reject) => {
            con.query(sectionQueries.GET_SECTIONS_LIST, (err, result) => {
                if (err)
                    throw err;
                resolve(result);
            });
        });
        return pro;
    }
//     getActiveSectionsList() {
//         const sql = `SELECT s.id as sectionId,startDate,endDate,startTime,endTime,courseId,teacherId,c.name as courseName ,t.firstName,t.secondName,t.lastName FROM sections s left join courses c on c.id=s.courseId left OUTER join teachers t on t.id=s.teacherId WHERE endDate>= CURRENT_TIMESTAMP();`;
//         let pro = new Promise((resolve, reject) => {
//             con.query(sql, (err, result) => {
//                 if (err)
//                     throw err;
//                 resolve(result);
//             });
//         });
//         return pro;
//     }
//     assignStudentToSection(sectionId, studentId) {
//         const sql = `INSERT INTO student_section (sectionId , studentId ) VALUES (?,? )`;
//         let pro = new Promise((resolve, reject) => {
//             con.query(sql, [sectionId, studentId], (err, result) => {
//                 if (err)
//                     return reject(err);
//                 resolve(result);
//             });
//         });
//         return pro;
//     }
//     getStudentsRelatedToSection(sectionID) {
//         const sql = `SELECT ss.id as "ss_id" ,ss.studentId,ss.sectionId ,stu.id as "stu_id",firstName,secondName,lastName,city,mobileNumber FROM student_section ss INNER JOIN students stu ON ( ss.studentId = stu.id) WHERE ss.sectionId=?`;
//         let pro = new Promise((resolve, reject) => {
//             con.query(sql, [sectionID], (err, result) => {
//                 if (err)
//                     throw err;
//                 resolve(result);
//             });
//         });
//         return pro;
//     }
}
export default SectionRepository;
