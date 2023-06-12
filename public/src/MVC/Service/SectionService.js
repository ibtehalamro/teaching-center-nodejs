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

    async getSectionsList(req) {
        try {
            const sections = await this.sectionRepository.getSectionsList();
            return JSON_RESPONSE(ResponseStatus.success, "Sections list", Section.getSectionJSONFromDBResult(sections));
        } catch (error) {
            console.log('service error', error)
            return JSON_RESPONSE(ResponseStatus.fail, "Can't reach sections list.");
        }
    }
    async createNewSection(req) {
        try {
            const section = Section.createSectionFromRequest(req);
            const result = await this.sectionRepository.createNewSection(section);
            return JSON_RESPONSE(ResponseStatus.success, "Section added", { id: result?.insertId });
        } catch (error) {
            console.log('section service', error)
            return JSON_RESPONSE(ResponseStatus.fail, "Can't create new section.");
        }
    }





    async getStudentsWithSectionStatus(req) {
        const sectionId = req.params.sectionId;
        try {
            const students = await this.sectionRepository.getStudentsWithSectionStatus(sectionId);
            return JSON_RESPONSE(ResponseStatus.success, "Students list", students);
        } catch (error) {
            return JSON_RESPONSE(ResponseStatus.fail, "Can't reach students list.");
        }
    }

    async assignStudentsToSectionBySectionId(req) {
        const sectionId = req.params.sectionId;
        console.log('sectionId', sectionId)
        const { selectedStudent, discount } = req.body;
        try {
            const students = await this.sectionRepository.assignStudentsToSectionBySectionId(sectionId, selectedStudent, discount);
            return JSON_RESPONSE(ResponseStatus.success, "Students list", students);
        } catch (error) {
            console.log('service error', error)
            return JSON_RESPONSE(ResponseStatus.fail, "Can't reach students list.");
        }
    }

    async getSectionStudentsBySectionId(req) {
        const sectionId = req.params.sectionId;

        try {
            const students = await this.sectionRepository.getSectionStudentsBySectionId(sectionId);
            return JSON_RESPONSE(ResponseStatus.success, "Students list", students);
        } catch (error) {
            console.log('service error', error);
            return JSON_RESPONSE(ResponseStatus.fail, "Can't retrieve students list.");
        }
    }


}
export default SectionService;
