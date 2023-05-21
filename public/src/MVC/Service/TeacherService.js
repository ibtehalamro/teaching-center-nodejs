// import Address from "../Model/helpers/Address.js";
// import Name from "../Model/helpers/Name.js";
// import Teacher from "../Model/Person/Teacher.js";
// import Common from "../Model/common/common.js";
// import ResponseEnums from "../Enums/ResponseEnums.js";
// class TeacherService {
//     createTeacherFromRequest(req) {
//         const person = req.body;
//         const { firstName, secondName, lastName } = person.name;
//         const teacherName = new Name(firstName, secondName, lastName);
//         const teacherAddress = new Address(person.address.city);
//         const teacher = new Teacher(teacherName, teacherAddress, person.mobileNumber);
//         return teacher;
//     }
//     teacherRepository;
//     constructor(teacherRepository) {
//         this.teacherRepository = teacherRepository;
//     }
//     update(id, teacher) {
//         return this.teacherRepository.update(id, teacher);
//     }
//     async getByName(req) {
//         const { firstName, secondName, lastName } = req.body.name;
//         const teacherName = new Name(firstName, secondName, lastName);
//         const teacherByName = await this.teacherRepository.getByName(teacherName);
//         const teacher = Common.dbObjectToObject(teacherByName);
//         if (teacher.length > 0) {
//             return teacher[0];
//         }
//         return undefined;
//     }
//     async addStudent(req) {
//         const teacherByName = await this.getByName(req);
//         if (teacherByName) {
//             return Common.apiResponse(ResponseEnums.fail, "Teacher already exists");
//         }
//         const teacher = this.createTeacherFromRequest(req);
//         const result = await this.teacherRepository.addStudent(teacher);
//         return Common.apiResponse(ResponseEnums.success, "Teacher added", { id: result });
//     }
//     delete(id) {
//         return this.teacherRepository.deleteById(id);
//     }
//     get(id) {
//         return this.teacherRepository.getById(id);
//     }
//     async getTeachersList(req) {
//         const teachers = await this.teacherRepository.getAll();
//         return Common.apiResponse(ResponseEnums.success, "Teacher list", teachers);
//     }
// }
// export default TeacherService;
