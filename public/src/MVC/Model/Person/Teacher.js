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
        teacher.setGender(person.gender);
        return teacher;
    }

    static getTeacherJSONFromDBResult(dbResult){
        const transformedList = dbResult?.map(teacher => {
            return {
                id: teacher.id,
                name: {
                    firstName: teacher.firstName,
                    parentName: teacher.parentName,
                    grandParentName: teacher.grandParentName,
                    familyName: teacher.familyName
                },
                address: {
                    city: teacher.city
                },
                mobileNumber: {
                    number1: teacher.mobileNumber
                },
                gender: teacher.gender
            };
        })
        return transformedList;
    }
}
export default Teacher;
