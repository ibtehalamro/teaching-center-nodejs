 export const GET_NUMBER_OF_STUDENTS_NOT_DELETED = "SELECT COUNT(*) as students from students where is_deleted = 0;";
export const INSERT_NEW_STUDENT = `INSERT INTO students (firstName, parentName, grandParentName, familyName, city, mobileNumber, gender) VALUES (?, ?, ?, ?, ?, ?, ?);`;
export const GET_STUDENTS_LIST = `SELECT * FROM students where is_deleted = 0`;
export const GET_STUDENT_BY_ID =`SELECT * FROM students where id = ?`;
export const UPDATE_STUDENT_BY_ID = `update students set firstName=?,parentName=?,grandParentName=?,familyName=?,city=?,mobileNumber=?, gender=? where id=?`;

export const STUDENT_QUERIES ={
    GET_STUDENT_ASSIGNED_SECTIONS:'SELECT rel.*, sec.*, tec.*, ( '+
    ' SELECT SUM(pa.amount) FROM `student-payments` r '+
    'INNER join payments pa on r.paymentId = pa.id and pa.isDeleted =0 '+
   ' WHERE r.`section-student-Id` = rel.id and r.isDeleted =0 '+
        
   ' ) as sum FROM `section-student` rel ' +
    'LEFT JOIN sections sec ON rel.sectionId = sec.id ' +
    'LEFT JOIN teachers tec ON sec.teacherId = tec.id ' +
    'WHERE rel.studentId = ?',
    GET_ALL_SECTIONS_WITH_STUDENT_STATUS:'SELECT sec.*,CASE WHEN rel.id IS NOT NULL THEN true ELSE false END AS assigned FROM `sections` sec left join `section-student` rel on sec.id = rel.sectionId and rel.studentId=?',
    ASSIGN_SECTION_TO_STUDENT:'INSERT INTO `section-student` ( studentId, sectionId,discount) VALUES (?, ?,?)',
    SOFT_DELETE_STUDENT_BY_ID : "UPDATE `students` SET `is_deleted`='1' WHERE id = ?",
   
};
