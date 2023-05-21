class Person {
    id = 0;
    fullName;
    address;
    mobileNumber;
    constructor(name, address, mobileNumber) {
        this.fullName = name;
        this.address = address;
        this.mobileNumber = mobileNumber;
    }
    setMobileNumber(mobileNumber) {
        this.mobileNumber = mobileNumber;
    }
    getMobileNumber() {
        return this.mobileNumber;
    }
    setAddress(address) {
        this.address = address;
    }
    getAddress() {
        return this.address;
    }
    setId(id) {
        this.id = id;
    }
    getId = () => {
        return this.id;
    };
    setFullName(fullName) {
        this.fullName = fullName;
    };
    getFullName = () => {
        return this.fullName;
    };
}
export default Person;
