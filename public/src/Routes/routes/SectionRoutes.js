import express from "express";
import SectionController from "../../MVC/Controller/SectionController.js";

const SectionRoutes = express.Router();
const sectionController = new SectionController();

export const SECTION_API_ROUTES = {
    getSectionsList: "/list",
 };

//get
SectionRoutes.get(SECTION_API_ROUTES.getSectionsList, sectionController.getSectionsList);


// sectionRoutes.post("", sectionController.addSection);
// sectionRoutes.delete("", sectionController.deleteSectionById);
// sectionRoutes.get("/currentSections", sectionController.getCurrentActiveSectionsList);
// sectionRoutes.get("/list/student/:id", sectionController.getStudentsRelatedToSection);
// sectionRoutes.post("/assignStudent", sectionController.assignStudentToSection);
// sectionRoutes.get("/:id", sectionController.getSectionById);
// sectionRoutes.put("/:id", sectionController.updateSection);
export default SectionRoutes;
