// import con from "../../Server/DB_connection.js";
// class TeacherRepository {
//     teachers = [];
//     constructor() { }
//     update(id, teacher) {
//         const indexOfObject = this.teachers.findIndex((s) => s.getId() === id);
//         indexOfObject !== -1
//             ? this.teachers[indexOfObject] = teacher
//             : console.log("Item is not found");
//         return this.teachers[indexOfObject];
//     }
//     getByName = (name) => {
//         const sql = `SELECT * FROM teachers WHERE firstName = ? and secondName = ? AND lastName = ? LIMIT 1`;
//         let pro = new Promise((resolve, reject) => {
//             con.query(sql, [name.getFirstName(), name.getSecondName(), name.getLastName()], (err, result) => {
//                 if (err)
//                     throw err;
//                 resolve(result);
//             });
//         });
//         return pro;
//     };
//     addStudent(teacher) {
//         const sql = `INSERT INTO teachers ( firstName, secondName, lastName,city,mobileNumber) VALUES(?,?,?,?,?)`;
//         let pro = new Promise((resolve, reject) => {
//             con.query(sql, [teacher.getName().getFirstName(), teacher.getName().getSecondName(), teacher.getName().getLastName(),
//                 teacher.getAddress().getCity(), teacher.getMobileNumber()], (err, result) => {
//                 if (err)
//                     throw err;
//                 resolve(result);
//             });
//         });
//         return pro;
//     }
//     deleteById(id) {
//         const indexOfObject = this.teachers.findIndex((s) => s.getId() === id);
//         indexOfObject !== -1
//             ? this.teachers.splice(indexOfObject, 1)
//             : console.log("Item is not found");
//         return indexOfObject == -1 ? false : true;
//     }
//     getById(id) {
//         const teacher = this.teachers.find((obj) => obj.getId() === id);
//         return teacher;
//     }
//     getAll() {
//         const sql = `SELECT * FROM teachers`;
//         let pro = new Promise((resolve, reject) => {
//             con.query(sql, (err, result) => {
//                 if (err)
//                     throw err;
//                 resolve(result);
//             });
//         });
//         return pro;
//     }
// }
// export default TeacherRepository;
