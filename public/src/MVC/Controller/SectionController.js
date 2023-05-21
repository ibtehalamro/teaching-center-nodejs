import SectionService from '../Service/SectionService.js';

export default class SectionController {
    sectionService = new SectionService();
    constructor() {
    }

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

//     addSection = async (req, res) => {
//         try {
//             const response = await this.sectionService.add(req);
//             res.json(response);
//         }
//         catch (err) {
//             res.json({ status: ResponseEnums.fail, message: "error: " + err.message });
//         }
//     };

//     getCurrentActiveSectionsList = async (req, res) => {
//         try {
//             const response = await this.sectionService.getCurrentActiveSectionsList(req);
//             res.json(response);
//         }
//         catch (err) {
//             res.json(Common.apiResponse(ResponseEnums.error, "error from catch"));
//         }
//     };
//     getSectionById = (req, res) => {
//         const { id } = req.params;
//         const section = this.sectionService.get(parseInt(id));
//         section ? res.json({ status: ResponseEnums.success, data: section }) : res.json({ status: ResponseEnums.fail, message: `section with id ${id} cannot be found` });
//     };
//     deleteSectionById = (req, res) => {
//         const { id } = req.body;
//         const isDeleted = this.sectionService.delete(id);
//         isDeleted ? res.json({ status: ResponseEnums.success }) : res.json({ status: ResponseEnums.error });
//     };
//     updateSection = (req, res) => {
//         // const { section } = req.body;
//         // const { id } = req.params;
//         // console.log("------Section", section)
//         // const sectionObject = new Section(null,null,null,null,null,null);//TODO change these
//         // const updatedSection = this.sectionService.update(parseInt(id), sectionObject);
//         // updatedSection ? res.json({ status: ResponseEnums.success, data: updatedSection }) : res.json({ status: ResponseEnums.fail });
//     };
//     assignStudentToSection = async (req, res) => {
//         let response = {};
//         try {
//             response = await this.sectionService.assignStudentToSection(req);
//         }
//         catch (err) {
//             res.json({ status: ResponseEnums.fail });
//         }
//         res.json(response);
//     };
//     getStudentsRelatedToSection = async (req, res) => {
//         const { id: sectionID } = req.params;
//         console.log('get students related to section called ', sectionID);
//         const result = await this.sectionService.getStudentsRelatedToSection(sectionID);
//         result ? res.json(result) : res.json({ status: ResponseEnums.fail });
//     };
}
