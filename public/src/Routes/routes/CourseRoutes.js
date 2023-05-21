import express from "express";
import CourseController from "../../MVC/Controller/CourseController.js";

const courseRoutes = express.Router();
const courseController = new CourseController();

//GET 
courseRoutes.get("/courseTypes", courseController.getCourseTypes);
courseRoutes.get("/list", courseController.getCoursesList);

//POST
courseRoutes.post("", courseController.saveNewCourseData);


// courseRoutes.delete("", courseController.deleteCourseById);
// courseRoutes.get("/sections/:id", courseController.getCourseSectionsList);
// courseRoutes.get("/:id", courseController.getCourseById);
// courseRoutes.put("/:id", courseController.updateCourse);
export default courseRoutes;
