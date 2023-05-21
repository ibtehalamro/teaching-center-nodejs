class MobileNumber {
    number1 = "";
    constructor(mobileNumber ) {
        this.setNumber1(mobileNumber?.number1?.trim());
    }

    getNumber1() {
        return this.number1;
    }
    setNumber1(value) {
        this.number1 = value;
    }
}
export default MobileNumber;
