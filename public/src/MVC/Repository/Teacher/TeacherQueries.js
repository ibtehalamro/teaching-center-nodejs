 
export const TEACHER_QUERIES={
    GET_TEACHER_SECTIONS_BY_TEACHER_ID:'SELECT * from sections where teacherId =?',
    INSERT_NEW_TEACHER : `INSERT INTO teachers (firstName, parentName, grandParentName, familyName, city, mobileNumber) VALUES (?, ?, ?, ?, ?, ?);`,
    GET_TEACHERS_LIST : `SELECT * FROM teachers`,
   
}
