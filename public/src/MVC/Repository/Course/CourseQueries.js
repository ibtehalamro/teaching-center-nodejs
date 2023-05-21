export const GET_COURSE_TYPES = "SELECT * FROM `common` WHERE `key` = 'COURSE_TYPE'";
export const SAVE_NEW_COURSE_DATA = `INSERT INTO courses ( name,type ) VALUES(?,?)`;
export const GET_COURSES_LIST= `SELECT co.*, COUNT(se.courseId) sections FROM courses co LEFT JOIN sections se on co.id = se.courseId group by co.id`

