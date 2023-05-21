// import con from "../../Server/DB_connection.js";
// class PaymentRepository {
//     addStudentPaymentToSection(amount, discount, student_section_id, currency) {
//         const sql = `INSERT INTO payments (amount, discount, student_section_id, currency) VALUES (?, ?, ?, ?)`;
//         let pro = new Promise((resolve, reject) => {
//             con.query(sql, [amount, discount, student_section_id, currency], (err, result) => {
//                 if (err)
//                     throw err;
//                 resolve(result);
//             });
//         });
//         return pro;
//     }
// }
// export default PaymentRepository;
