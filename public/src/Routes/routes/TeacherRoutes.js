import express from "express";
import TeacherController from "../../MVC/Controller/TeacherController.js";

const TeacherRoutes = express.Router();

const teacherController = new TeacherController();

const TEACHER_API_ROUTES = {
    GET_TEACHERS_LIST: "/list",
    GET_TEACHER_SECTIONS_BY_TEACHER_ID: "/:teacherId/sections",
    POST_TEACHER_FORM_DATA: "",
    PUT_UPDATE_TEACHER_FORM:"/:teacherId",
    GET_TEACHER_BY_ID:"/:teacherId",
    DELETE_TEACHER_BY_ID:"/:teacherId",
}

//GET
TeacherRoutes.get(TEACHER_API_ROUTES.GET_TEACHERS_LIST, teacherController.getTeachersList);
TeacherRoutes.get(TEACHER_API_ROUTES.GET_TEACHER_SECTIONS_BY_TEACHER_ID, teacherController.getTeacherSectionsByTeacherId);
TeacherRoutes.get(TEACHER_API_ROUTES.GET_TEACHER_BY_ID, teacherController.getTeacherById);

//POST
TeacherRoutes.post(TEACHER_API_ROUTES.POST_TEACHER_FORM_DATA, teacherController.saveNewTeacher);


//PUT 
TeacherRoutes.put(TEACHER_API_ROUTES.PUT_UPDATE_TEACHER_FORM, teacherController.updateTeacherByTeacherId);

//DELETE 
TeacherRoutes.delete(TEACHER_API_ROUTES.DELETE_TEACHER_BY_ID, teacherController.sofDeleteTeacherByTeacherId);


export default TeacherRoutes;