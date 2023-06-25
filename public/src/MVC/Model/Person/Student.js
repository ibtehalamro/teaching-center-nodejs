import Person from './../common/person/Person.js';
import FullNameManager from './../common/person/FullNameManager.js';
import Address from './../common/contacts/Address.js';
import MobileNumber from '../common/contacts/MobileNumber.js';

class Student extends Person {
    constructor(name, address, mobileNumber) {
        super(name, address, mobileNumber);
    }

    static getStudentFromRequestBody(person) {
        console.log('student', person)
        const { firstName, parentName, grandParentName, familyName } = person.name;
        const studentName = new FullNameManager(firstName, parentName, grandParentName, familyName);
        const studentAddress = new Address(person.address.city);
        const studentMobileNumber = new MobileNumber(person.mobileNumber);
        const student = new Student(studentName, studentAddress, studentMobileNumber);
        student.setId(person.id);
        student.setGender(person.gender);
        return student;
    }

    static getStudentJSONFromDBResult(dbResult) {
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
                },
                gender: student.gender
            };
        })
        return transformedList;
    }
}
export default Student;
