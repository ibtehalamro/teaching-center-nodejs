import { JSON_RESPONSE, ResponseStatus } from '../../utils/Response.js';
import SectionService from '../Service/SectionService.js';

export default class SectionController {
    sectionService = new SectionService();

    getSectionsList = async (req, res) => {
        try {
            const response = await this.sectionService.getSectionsList(req);
            res.json(response);
        }
        catch (err) {
            const response = JSON_RESPONSE(ResponseStatus.error, "error: error occurred while getting sections list try again.");
            res.json(response);
        }
    };

    createNewSection = async (req, res) => {
        try {
            const response = await this.sectionService.createNewSection(req);
            res.json(response);
        }
        catch (err) {
            console.log('controller', err)
            const response = JSON_RESPONSE(ResponseStatus.error, "error: error occurred while getting sections list try again.");
            res.json(response);
        }
    };

    /**
    * Retrieves all students and marks students related to the specified sectionId as true.
    **/
    getStudentsWithSectionStatus = async (req, res) => {
        try {
            const response = await this.sectionService.getStudentsWithSectionStatus(req);
            res.json(response);
        }
        catch (err) {
            const response = JSON_RESPONSE(ResponseStatus.error, "Error occurred while getting sections list try again.");
            res.json(response);
        }
    };

    assignStudentsToSectionBySectionId = async (req, res) => {
        try {
            const response = await this.sectionService.assignStudentsToSectionBySectionId(req);
            res.json(response);
        }
        catch (err) {
            const response = JSON_RESPONSE(ResponseStatus.error, "Error occurred while assigning students to section try again.");
            res.json(response);
        }
    }


    getSectionStudentsBySectionId=async(req,res)=>{
        try {
            const response = await this.sectionService.getSectionStudentsBySectionId(req);
            res.json(response);
        }
        catch (err) {
            const response = JSON_RESPONSE(ResponseStatus.error, "Error occurred while getting students list to section try again.");
            res.json(response);
        }
    }
}
