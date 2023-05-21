import con from "../../../server/DB_connection.js";
import Student from "../../Model/Person/Student.js";
import { GET_NUMBER_OF_STUDENTS_NOT_DELETED, GET_STUDENTS_LIST, GET_STUDENT_BY_ID, INSERT_NEW_STUDENT, SOFT_DELETE_STUDENT_BY_ID, UPDATE_STUDENT_BY_ID } from "./StudentQueries.js";

class StudentRepository {
    students = [];
    constructor() { }

    saveNewStudent(student) {
        return new Promise((resolve, reject) => {
            con.query(INSERT_NEW_STUDENT, [
                student.getFullName().getFirstName(),
                student.getFullName().getParentName(),
                student.getFullName().getGrandParentName(),
                student.getFullName().getFamilyName(),
                student.getAddress().getCity(),
                student.getMobileNumber().getNumber1()
            ], (err, result) => {
                if (err) {
                    console.error("add new student error: ", err);
                    reject(err);
                } else {
                    console.log("add new student result: ", result);
                    resolve(result);
                }
            });
        });
    }

    getStudentsList() {

        return new Promise((resolve, reject) => {
            con.query(GET_STUDENTS_LIST, (error, result) => {
                if (error) {
                    console.error("Error occurred while fetching the student list: ", error);
                    reject(error);
                } else {
                    console.log("Successfully fetched the student list: ", result);
                    resolve(result);
                }
            });
        });
    }

    getStudentById(studentId) {
        return new Promise((resolve, reject) => {
            con.query(GET_STUDENT_BY_ID, [studentId], (error, result) => {
                if (error) {
                    console.error(`Error occurred while fetching the student with id = ${studentId}: `, error);
                    reject(error);
                } else {
                    console.log(`Successfully fetched the student with id = ${studentId}: `, result);
                    resolve(result);
                }
            });
        });
    }

    updateStudentByStudentId(student) {
        console.log('student', student)
        return new Promise((resolve, reject) => {
          con.query(UPDATE_STUDENT_BY_ID, 
            [ student.getFullName().getFirstName(),
                student.getFullName().getParentName(),
                student.getFullName().getGrandParentName(),
                student.getFullName().getFamilyName(),
                student.getAddress().getCity(),
                student.getMobileNumber().getNumber1(),
                student.getId()],
            (error, result) => {
              if (error) {
                console.error(`Error occurred while updating the student with id = ${student.getId()}: `, error);
                reject(error);
              } else {
                console.log(`Successfully updated student with id = ${student.getId()}: `, result);
                resolve(result);
              }
            });
        });
      }
      


    // getByName = (name) => {
    //     const sql = `SELECT * FROM students WHERE firstName = ? and secondName = ? AND lastName = ? LIMIT 1`;
    //     let pro = new Promise((resolve, reject) => {
    //         con.query(sql, [name.getFirstName(), name.getSecondName(), name.getLastName()], (err, result) => {
    //             if (err)
    //                 throw err;
    //             resolve(result);
    //         });
    //     });
    //     return pro;
    // };

    // deleteById(id) {
    //     const sql = SOFT_DELETE_STUDENT_BY_ID;
    //     let pro = new Promise((resolve, reject) => {
    //         con.query(sql, [id], (err, result) => {
    //             if (err) {
    //                 reject(err);
    //                 return false;
    //             }
    //             resolve(result);
    //         });
    //     });
    //     return true;
    // }


    // getSectionsRelatedToStudent(studentId) {
    //     const sql = `SELECT * FROM student_section ss
    // LEFT JOIN section_course sec ON (sec.sectionId= ss.sectionId )
    //  LEFT JOIN courses cr ON ( cr.id = sec.courseId)
    //  LEFT JOIN sections s ON ( s.id = sec.sectionId)
    //  LEFT JOIN teachers t ON ( t.id = s.teacherId) 
    // WHERE ss.studentId=?`;
    //     let pro = new Promise((resolve, reject) => {
    //         con.query(sql, [studentId], (err, result) => {
    //             if (err)
    //                 throw err;
    //             resolve(result);
    //         });
    //     });
    //     return pro;
    // }
    // getNumberOfStudentsNotDeleted() {
    //     const sql = GET_NUMBER_OF_STUDENTS_NOT_DELETED;
    //     let pro = new Promise((resolve, reject) => {
    //         con.query(sql, (err, result) => {
    //             if (err)
    //                 throw err;
    //             resolve(result);
    //         });
    //     });
    //     return pro;
    // }
}
export default StudentRepository;
