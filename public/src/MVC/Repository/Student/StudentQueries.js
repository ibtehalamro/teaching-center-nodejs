export const SOFT_DELETE_STUDENT_BY_ID = "UPDATE `students` SET `is_deleted`='1' WHERE id = ?";
export const GET_NUMBER_OF_STUDENTS_NOT_DELETED = "SELECT COUNT(*) as students from students where is_deleted = 0;";
export const INSERT_NEW_STUDENT = `INSERT INTO students (firstName, parentName, grandParentName, familyName, city, mobileNumber) VALUES (?, ?, ?, ?, ?, ?);`;
export const GET_STUDENTS_LIST = `SELECT * FROM students where is_deleted = 0`;
export const GET_STUDENT_BY_ID =`SELECT * FROM students where id = ?`;
export const UPDATE_STUDENT_BY_ID = `update students set firstName=?,parentName=?,grandParentName=?,familyName=?,city=?,mobileNumber=? where id=?`;

