import express from "express";
import SectionController from "../../MVC/Controller/SectionController.js";

const SectionRoutes = express.Router();
const sectionController = new SectionController();

export const SECTION_API_ROUTES = {
    getSectionsList: "/list",
    GET_ASSIGNED_STUDENTS_BY_SECTION_ID: "/:sectionId/section-students",
    GET_STUDENTS_WITH_SECTION_STATUS:"/:sectionId/all-students",
    POST_SECTION_FORM :"",
    POST_SELECTED_STUDENTS_TO_SECTION:"/:sectionId/assign-students",
 };

//GET
SectionRoutes.get(SECTION_API_ROUTES.getSectionsList, sectionController.getSectionsList);
SectionRoutes.get(SECTION_API_ROUTES.GET_ASSIGNED_STUDENTS_BY_SECTION_ID, sectionController.getSectionStudentsBySectionId);
SectionRoutes.get(SECTION_API_ROUTES.GET_STUDENTS_WITH_SECTION_STATUS, sectionController.getStudentsWithSectionStatus);

//POST
SectionRoutes.post(SECTION_API_ROUTES.POST_SECTION_FORM, sectionController.createNewSection);
SectionRoutes.post(SECTION_API_ROUTES.POST_SELECTED_STUDENTS_TO_SECTION, sectionController.assignStudentsToSectionBySectionId);

// sectionRoutes.delete("", sectionController.deleteSectionById);
// sectionRoutes.get("/currentSections", sectionController.getCurrentActiveSectionsList);
// sectionRoutes.get("/list/student/:id", sectionController.getStudentsRelatedToSection);
// sectionRoutes.post("/assignStudent", sectionController.assignStudentToSection);
// sectionRoutes.get("/:id", sectionController.getSectionById);
// sectionRoutes.put("/:id", sectionController.updateSection);
export default SectionRoutes;