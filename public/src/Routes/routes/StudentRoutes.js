import express from "express";
import StudentController from "../../MVC/Controller/StudentController.js";

const studentRoutes = express.Router();
const studentController = new StudentController();

export const STUDENT_API_ROUTES = {
    getStudentsList: "/list",
    saveNewStudent: "",
    getStudentsAssignedToSection:'/student-section/:sectionId',
    GET_STUDENT_ASSIGNED_SECTIONS:'/:studentId/sections',
    GET_ALL_SECTIONS_WITH_STUDENT_STATUS:'/:studentId/all-sections-with-status',
    POST_MULTIPLE_SECTIONS_TO_STUDENT:'/:studentId/assign-sections-to-student',
};

//get
studentRoutes.get(STUDENT_API_ROUTES.getStudentsList, studentController.getStudentsList);
studentRoutes.get("/:id", studentController.getStudentById);
studentRoutes.get(STUDENT_API_ROUTES.GET_STUDENT_ASSIGNED_SECTIONS, studentController.getStudentAssignedSections);
studentRoutes.get(STUDENT_API_ROUTES.GET_ALL_SECTIONS_WITH_STUDENT_STATUS, studentController.getAllSectionsWithStudentStatusPromise);


//post 
studentRoutes.post(STUDENT_API_ROUTES.saveNewStudent, studentController.saveNewStudent);
studentRoutes.post(STUDENT_API_ROUTES.POST_MULTIPLE_SECTIONS_TO_STUDENT, studentController.assignSectionsToStudent);


//put
studentRoutes.put("/:id", studentController.updateStudentByStudentId);





// studentRoutes.get("/count", studentController.getNumberOfStudentsNotDeleted);
// studentRoutes.delete("/:id", studentController.deleteStudentById);
// studentRoutes.get("/list/sections/:id", studentController.getSectionsRelatedToStudent);

export default studentRoutes;
