
export const TEACHER_QUERIES = {
    GET_TEACHER_SECTIONS_BY_TEACHER_ID: 'SELECT * from sections where teacherId =? and  \`is_deleted\` = 0',
    INSERT_NEW_TEACHER: `INSERT INTO teachers (firstName, parentName, grandParentName, familyName, city, mobileNumber, gender, \`is_deleted\`) VALUES (?, ?, ?, ?, ?, ?, ?,0);`,
    GET_TEACHERS_LIST: `SELECT * FROM teachers where \`is_deleted\` = 0`,
    UPDATE_TEACHER_BY_TEACHER_ID : 'UPDATE teachers SET firstName = ?, parentName = ?, grandParentName = ?, familyName = ?, city = ?, mobileNumber = ?, gender = ?  WHERE  id = ?',
    GET_TEACHER_BY_TEACHER_ID:'SELECT * from teachers where Id =?',
    SOFT_DELETE_TEACHER_BY_TEACHER_ID:`UPDATE teachers set \`is_deleted\`='1' where Id =?`
}
