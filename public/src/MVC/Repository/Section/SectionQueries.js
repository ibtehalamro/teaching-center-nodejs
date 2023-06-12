export const SECTION_QUERIES = {
    GET_SECTIONS_LIST: `SELECT * FROM sections`,
    SAVE_SECTION_DATA: 'INSERT INTO sections( startDate, endDate, startTime, endTime, courseId, teacherId,feeTotal,sectionName) VALUES (?,?,?,?,?,?,?,? )',
    GET_STUDENTS_WITH_SECTION_STATUS: 'SELECT s.*, ' +
    'CASE WHEN ss.studentId IS NOT NULL THEN true ELSE false END AS assigned ' +
    'FROM students s ' +
    'LEFT JOIN `section-student` ss ON s.id = ss.studentId ' +
    'AND ss.sectionId = ? ',
    ASSIGN_STUDENT_TO_SECTION_BY_SECTION_ID:'INSERT INTO `section-student` (sectionId, studentId,discount) VALUES (?, ?,?)',
    GET_SECTION_STUDENTS_BY_SECTION_ID:`
    SELECT
        stu.*
    FROM
        \`section-student\` rel
    LEFT JOIN students stu ON
        rel.studentId = stu.id
    WHERE
        rel.sectionId = ?
`
};