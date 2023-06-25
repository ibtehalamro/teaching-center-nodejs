export const PAYMENT_QUERIES = {
    SAVE_STUDENT_SECTION_PAYMENT: 'INSERT INTO `student-payments` (paymentId,`section-student-Id` )' +
        ' VALUES ( ?,  (select id from `section-student` rel where rel.sectionId=? and rel.studentId=?) )',
    VIEW_STUDENT_PAYMENTS_FOR_SECTION: `
    SELECT
    py.id AS paymentId,
    py.amount,
    py.currency,
    py.createdAt,
    py.updatedAt,
    sp.id AS studentPaymentId
FROM
    \`section-student\` rel
LEFT JOIN \`student-payments\` sp ON
    rel.id = sp.\`section-student-Id\` and sp.isDeleted = 0
INNER JOIN payments py ON
    sp.paymentId = py.id AND py.isDeleted = 0
WHERE
    rel.sectionId = ? AND rel.studentId = ?
    `,
    DELETE_PAYMENT_BY_ID: 'UPDATE payments ' +
        'SET isDeleted = 1 ' +
        'WHERE id = ?',
    INSERT_PAYMENT_VALUE: 'INSERT INTO payments (amount,currency) VALUES (?,?)',
    DELETE_STUDENT_SECTION_PAYMENT_BY_PAYMENT_ID: 'UPDATE \`student-payments\` ' +
        'SET isDeleted = 1 ' +
        'WHERE id = ?',
}
