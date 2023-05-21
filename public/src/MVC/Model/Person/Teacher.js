import Staff from "./Staff.js";
class Teacher extends Staff {
    constructor(name, address, mobileNumber) {
        super(name, address, mobileNumber);
    }
}
export default Teacher;
