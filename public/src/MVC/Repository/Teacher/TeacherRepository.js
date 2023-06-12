import con, { executeQuery } from "../../../server/DB_connection.js";
import { TEACHER_QUERIES } from './TeacherQueries.js';

class TeacherRepository {

    saveNewTeacher(teacher) {
        return new Promise((resolve, reject) => {
            con.query(TEACHER_QUERIES.INSERT_NEW_TEACHER, [
                teacher.getFullName().getFirstName(),
                teacher.getFullName().getParentName(),
                teacher.getFullName().getGrandParentName(),
                teacher.getFullName().getFamilyName(),
                teacher.getAddress().getCity(),
                teacher.getMobileNumber().getNumber1()
            ], (err, result) => {
                if (err) {
                    console.error("add new teacher error: ", err);
                    reject(err);
                } else {
                    console.log("add new teacher result: ", result);
                    resolve(result);
                }
            });
        });
    }
    getTeachersList() {
        return executeQuery(TEACHER_QUERIES.GET_TEACHERS_LIST);
    }

    getTeacherSectionsByTeacherId(teacherId) {
        return executeQuery(TEACHER_QUERIES.GET_TEACHER_SECTIONS_BY_TEACHER_ID, [teacherId]);
    }
}
export default TeacherRepository;
