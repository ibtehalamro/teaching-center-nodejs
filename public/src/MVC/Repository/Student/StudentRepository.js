import con, { executeQuery } from "../../../server/DB_connection.js";
import Student from "../../Model/Person/Student.js";
import { GET_NUMBER_OF_STUDENTS_NOT_DELETED, GET_STUDENTS_LIST, GET_STUDENT_BY_ID, INSERT_NEW_STUDENT, SOFT_DELETE_STUDENT_BY_ID, STUDENT_QUERIES, UPDATE_STUDENT_BY_ID } from "./StudentQueries.js";

class StudentRepository {
  
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
                    // console.log(`Successfully fetched the student with id = ${studentId}: `, result);
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
      
      getStudentAssignedSections(studentId){
        return executeQuery( STUDENT_QUERIES.GET_STUDENT_ASSIGNED_SECTIONS, studentId)
      }


      getAllSectionsWithStudentStatusPromise(studentId){
        return executeQuery(STUDENT_QUERIES.GET_ALL_SECTIONS_WITH_STUDENT_STATUS,[studentId]);
      }

     assignSectionsToStudent(studentId,selectedSection,discount){
        return executeQuery(STUDENT_QUERIES.ASSIGN_SECTION_TO_STUDENT,[studentId,selectedSection,discount])
      }
   
}
export default StudentRepository;
