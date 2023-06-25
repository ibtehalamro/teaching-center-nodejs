import { executeQuery } from "../../../server/DB_connection.js";
import { TEACHER_QUERIES } from './TeacherQueries.js';

class TeacherRepository {

    saveNewTeacher(teacher) {
        return executeQuery(TEACHER_QUERIES.INSERT_NEW_TEACHER, [
            teacher.getFullName().getFirstName(),
            teacher.getFullName().getParentName(),
            teacher.getFullName().getGrandParentName(),
            teacher.getFullName().getFamilyName(),
            teacher.getAddress().getCity(),
            teacher.getMobileNumber().getNumber1(),
            teacher.getGender()
        ]);
    }

    updateTeacherByTeacherId(teacher) {
        return executeQuery(TEACHER_QUERIES.UPDATE_TEACHER_BY_TEACHER_ID, [
            teacher.getFullName().getFirstName(),
            teacher.getFullName().getParentName(),
            teacher.getFullName().getGrandParentName(),
            teacher.getFullName().getFamilyName(),
            teacher.getAddress().getCity(),
            teacher.getMobileNumber().getNumber1(),
            teacher.getGender(),
            teacher.getId()
        ]);
    }

    getTeachersList() {
        return executeQuery(TEACHER_QUERIES.GET_TEACHERS_LIST);
    }

    getTeacherSectionsByTeacherId(teacherId) {
        return executeQuery(TEACHER_QUERIES.GET_TEACHER_SECTIONS_BY_TEACHER_ID, [teacherId]);
    }

    getTeacherById(teacherId){
        return executeQuery(TEACHER_QUERIES.GET_TEACHER_BY_TEACHER_ID, [teacherId]);
    }

    sofDeleteTeacherByTeacherId(teacherId){
        return executeQuery(TEACHER_QUERIES.SOFT_DELETE_TEACHER_BY_TEACHER_ID,[teacherId]);
    }
}
export default TeacherRepository;
