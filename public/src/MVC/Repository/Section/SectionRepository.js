import con, { executeQuery } from '../../../server/DB_connection.js';
import { SECTION_QUERIES } from './SectionQueries.js';

class SectionRepository {
  createNewSection(section) {
    return executeQuery(SECTION_QUERIES.SAVE_SECTION_DATA,
      [section.getStartDate(), section.getEndDate(), section.getStartTime(), section.getEndTime(),
      section.getCourseId(), section.getTeacherId(), section.getFeeTotal(),section.getSectionName()])
  }
  getSectionsList() {
    return executeQuery(SECTION_QUERIES.GET_SECTIONS_LIST);
  }

  getStudentsWithSectionStatus(sectionId) {
    return executeQuery(SECTION_QUERIES.GET_STUDENTS_WITH_SECTION_STATUS, sectionId);
  }

  async assignStudentsToSectionBySectionId(sectionId, selectedStudent, discount) {
       return  executeQuery(SECTION_QUERIES.ASSIGN_STUDENT_TO_SECTION_BY_SECTION_ID, [sectionId, selectedStudent, discount]);
         
  }

  getSectionStudentsBySectionId(sectionId){
    return executeQuery(SECTION_QUERIES.GET_SECTION_STUDENTS_BY_SECTION_ID,[sectionId]);
  }
}
export default SectionRepository;
