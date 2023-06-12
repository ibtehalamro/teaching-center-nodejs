import express from "express";
import TeacherController from "../../MVC/Controller/TeacherController.js";

const TeacherRoutes = express.Router();

const teacherController = new TeacherController();

const TEACHER_API_ROUTES = {
    GET_TEACHERS_LIST: "/list",
    GET_TEACHER_SECTIONS_BY_TEACHER_ID: "/:teacherId/sections",
    POST_TEACHER_FORM_DATA: ""
}

//GET
TeacherRoutes.get(TEACHER_API_ROUTES.GET_TEACHERS_LIST, teacherController.getTeachersList);
TeacherRoutes.get(TEACHER_API_ROUTES.GET_TEACHER_SECTIONS_BY_TEACHER_ID, teacherController.getTeacherSectionsByTeacherId);

//POST
TeacherRoutes.post(TEACHER_API_ROUTES.POST_TEACHER_FORM_DATA, teacherController.saveNewTeacher);

export default TeacherRoutes;