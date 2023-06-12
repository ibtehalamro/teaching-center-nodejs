import Address from "../common/contacts/Address.js";
import MobileNumber from "../common/contacts/MobileNumber.js";
import FullNameManager from "../common/person/FullNameManager.js";
import Staff from "./Staff.js";
class Teacher extends Staff {
    constructor(name, address, mobileNumber) {
        super(name, address, mobileNumber);
    }
    static getTeacherFromRequestBody(person) {
        const { firstName, parentName, grandParentName, familyName } = person.name;
        const teacherName = new FullNameManager(firstName, parentName, grandParentName, familyName);
        const teacherAddress = new Address(person.address.city);
        const teacherMobileNumber = new MobileNumber(person.mobileNumber);
        const teacher = new Teacher(teacherName, teacherAddress, teacherMobileNumber);
        teacher.setId(person.id);
        return teacher;
    }

    static getStudentJSONFromDBResult(dbResult){
        const transformedList = dbResult?.map(student => {
            return {
                id: student.id,
                name: {
                    firstName: student.firstName,
                    parentName: student.parentName,
                    grandParentName: student.grandParentName,
                    familyName: student.familyName
                },
                address: {
                    city: student.city
                },
                mobileNumber: {
                    number1: student.mobileNumber
                }
            };
        })
        return transformedList;
    }
}
export default Teacher;
