import { executeQuery } from '../../../server/DB_connection.js';
import { COURSE_QUERIES } from './CourseQueries.js';
class CourseRepository {

    getCourseTypes = () => {
        return executeQuery(COURSE_QUERIES.GET_COURSE_TYPES);
    }

    saveNewCourseData(course) {
        return executeQuery(COURSE_QUERIES.SAVE_NEW_COURSE_DATA, [course.getName(), course.getType()]);
    }

    getCoursesList() {
        return executeQuery(COURSE_QUERIES.GET_COURSES_LIST);
    }

    getCourseSectionsList(courseId) {
        return executeQuery(COURSE_QUERIES.GET_COURSE_SECTION_BY_COURSE_ID, [courseId]);
    }
}
export default CourseRepository;
