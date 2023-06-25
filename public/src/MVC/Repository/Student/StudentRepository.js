import { executeQuery } from "../../../server/DB_connection.js";
import { GET_STUDENTS_LIST, GET_STUDENT_BY_ID, INSERT_NEW_STUDENT, STUDENT_QUERIES, UPDATE_STUDENT_BY_ID } from "./StudentQueries.js";

class StudentRepository {

    saveNewStudent(student) {
        return executeQuery(INSERT_NEW_STUDENT, [
            student.getFullName().getFirstName(),
            student.getFullName().getParentName(),
            student.getFullName().getGrandParentName(),
            student.getFullName().getFamilyName(),
            student.getAddress().getCity(),
            student.getMobileNumber().getNumber1(),
            student.getGender()
        ]);
    }

    getStudentsList() {
        return executeQuery(GET_STUDENTS_LIST);
    }

    getStudentById(studentId) {
        return executeQuery(GET_STUDENT_BY_ID, [studentId]);
    }

    updateStudentByStudentId(student) {
        return executeQuery(UPDATE_STUDENT_BY_ID,
            [student.getFullName().getFirstName(),
            student.getFullName().getParentName(),
            student.getFullName().getGrandParentName(),
            student.getFullName().getFamilyName(),
            student.getAddress().getCity(),
            student.getMobileNumber().getNumber1(),
            student.getGender(),
            student.getId(),
            ]);
    }

    getStudentAssignedSections(studentId) {
        return executeQuery(STUDENT_QUERIES.GET_STUDENT_ASSIGNED_SECTIONS, studentId)
    }

    getAllSectionsWithStudentStatusPromise(studentId) {
        return executeQuery(STUDENT_QUERIES.GET_ALL_SECTIONS_WITH_STUDENT_STATUS, [studentId]);
    }

    assignSectionsToStudent(studentId, selectedSection, discount) {
        return executeQuery(STUDENT_QUERIES.ASSIGN_SECTION_TO_STUDENT, [studentId, selectedSection, discount])
    }

    softDeleteStudentByStudentId(studentId) {
        return executeQuery(STUDENT_QUERIES.SOFT_DELETE_STUDENT_BY_ID, [studentId])
    }
}
export default StudentRepository;
