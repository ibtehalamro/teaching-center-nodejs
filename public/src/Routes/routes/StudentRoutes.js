import express from "express";
import StudentController from "../../MVC/Controller/StudentController.js";

const studentRoutes = express.Router();
const studentController = new StudentController();

export const STUDENT_API_ROUTES = {
    getStudentsList: "/list",
    saveNewStudent: "",
};

//get
studentRoutes.get(STUDENT_API_ROUTES.getStudentsList, studentController.getStudentsList);
studentRoutes.get("/:id", studentController.getStudentById);


//post 
studentRoutes.post(STUDENT_API_ROUTES.saveNewStudent, studentController.saveNewStudent);


//put
studentRoutes.put("/:id", studentController.updateStudentByStudentId);





// studentRoutes.get("/count", studentController.getNumberOfStudentsNotDeleted);
// studentRoutes.delete("/:id", studentController.deleteStudentById);
// studentRoutes.get("/list/sections/:id", studentController.getSectionsRelatedToStudent);

export default studentRoutes;
