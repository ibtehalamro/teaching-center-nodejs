export const GET_COURSE_TYPES = "SELECT * FROM `common` WHERE `key` = 'COURSE_TYPE'";
export const SAVE_NEW_COURSE_DATA = `INSERT INTO courses ( name,type ) VALUES(?,?)`;
export const GET_COURSES_LIST = `SELECT co.*, COUNT(se.courseId) sections FROM courses co LEFT JOIN sections se on co.id = se.courseId group by co.id`
export const GET_COURSE_SECTION_BY_COURSE_ID = `
SELECT
    sec.teacherId,
    sec.sectionName,
    sec.courseId,
    sec.endTime,
    sec.startTime,
    sec.endDate,
    sec.startDate,
    sec.id AS sectionId,
    sec.feeTotal AS feeTotal,
    cor.id AS courseID,
    cor.name AS courseName,
    CONCAT(
        tch.firstName,
        ' ',
        tch.parentName,
        ' ',
        tch.grandParentName,
        ' ',
        tch.familyName
    ) AS teacherName
FROM
    sections sec
LEFT JOIN courses cor ON
    sec.courseId = cor.id
LEFT JOIN teachers tch ON
    sec.teacherId = tch.id
WHERE
    courseId = 1;
`;


