import { JSON_RESPONSE, ResponseStatus } from '../../utils/Response.js';
import Section from '../Model/section/Section.js';
import SectionRepository from '../Repository/Section/SectionRepository.js';

/**
 * Class representing a section service.
 * Manages section crud.
 * Section is part of course
 */
class SectionService {
    sectionRepository = new SectionRepository();
    constructor() {
    }
    async getSectionsList(req) {
        try {
            const sections = await this.sectionRepository.getSectionsList();
            return JSON_RESPONSE(ResponseStatus.success, "Sections list", Section.getSectionJSONFromDBResult(sections));
        } catch (error) {
            return JSON_RESPONSE(ResponseStatus.fail, "Can't reach sections list.");
        }
    }
//     createSectionFromRequest(req) {
//         const { courseId, startDate, endDate, startTime, endTime, teacherId, sectionId } = req.body;
//         const section = new Section(startDate, endDate, teacherId, startTime, endTime, courseId);
//         section.setId(sectionId);
//         return section;
//     }
//     async add(req) {
//         const section = this.createSectionFromRequest(req);
//         const result = await this.sectionRepository.add(section);
//         return Common.apiResponse(ResponseEnums.success, "Section added", { id: result });
//     }
//     update(id, section) {
//         return this.sectionRepository.update(id, section);
//     }
//     async getBySectionNameAndTeacherId(req) {
//         const { name } = req.body;
//         const sectionByName = await this.sectionRepository.getBySectionNameAndTeacherId(name);
//         const section = Common.dbObjectToObject(sectionByName);
//         if (section.length > 0) {
//             return section[0];
//         }
//         return undefined;
//     }
//     delete(id) {
//         return this.sectionRepository.deleteById(id);
//     }
//     get(id) {
//         return this.sectionRepository.getById(id);
//     }

//     async getCurrentActiveSectionsList(req) {
//         const sections = await this.sectionRepository.getActiveSectionsList();
//         return Common.apiResponse(ResponseEnums.success, "Active section list", sections);
//     }
//     async assignStudentToSection(req) {
//         const { studentId, sectionId } = req.body;
//         let result;
//         try {
//             result = await this.sectionRepository.assignStudentToSection(sectionId, studentId);
//         }
//         catch (error) {
//             if (error.code == "ER_DUP_ENTRY") {
//                 return Common.apiResponse(ResponseEnums.error, "Student is already assigned to course");
//             }
//         }
//         return Common.apiResponse(ResponseEnums.success, "Student to section assigned", { id: result });
//     }
//     async getStudentsRelatedToSection(sectionID) {
//         const result = await this.sectionRepository.getStudentsRelatedToSection(sectionID);
//         return Common.apiResponse(ResponseEnums.success, "Students related to section ", { students: result });
//     }
}
export default SectionService;
