// import ResponseEnums from "../Enums/ResponseEnums.js";
// import Name from "../Model/helpers/Name.js";
// import Address from '../Model/helpers/Address.js';
// import Teacher from "../Model/Person/Teacher.js";
// import Common from "../Model/common/common.js";
// export default class TeacherController {
//     teacherService;
//     constructor(teacherService) {
//         this.teacherService = teacherService;
//     }
//     addTeacher = async (req, res) => {
//         try {
//             const response = await this.teacherService.addStudent(req);
//             res.json(response);
//         }
//         catch (err) {
//             res.json({ status: ResponseEnums.fail, message: "error: " + err.message });
//         }
//     };
//     getTeachersList = async (req, res) => {
//         try {
//             const response = await this.teacherService.getTeachersList(req);
//             res.json(response);
//         }
//         catch (err) {
//             res.json(Common.apiResponse(ResponseEnums.error, "error from catch"));
//         }
//     };
//     getTeacherById = (req, res) => {
//         const { id } = req.params;
//         const teacher = this.teacherService.get(parseInt(id));
//         teacher ? res.json({ status: ResponseEnums.success, data: teacher }) : res.json({ status: ResponseEnums.fail, message: `teacher with id ${id} cannot be found` });
//     };
//     deleteTeacherById = (req, res) => {
//         const { id } = req.body;
//         const isDeleted = this.teacherService.delete(id);
//         isDeleted ? res.json({ status: ResponseEnums.success }) : res.json({ status: ResponseEnums.error });
//     };
//     updateTeacher = (req, res) => {
//         const { teacher } = req.body;
//         const { id } = req.params;
//         console.log("------Teacher", teacher);
//         const name = new Name(teacher.name.firstName, teacher.name.secondName, teacher.name.lastName);
//         const address = new Address(teacher.address.city);
//         const teacherObject = new Teacher(name, address, teacher.mobileNumber);
//         const updatedTeacher = this.teacherService.update(parseInt(id), teacherObject);
//         updatedTeacher ? res.json({ status: ResponseEnums.success, data: updatedTeacher }) : res.json({ status: ResponseEnums.fail });
//     };
// }
