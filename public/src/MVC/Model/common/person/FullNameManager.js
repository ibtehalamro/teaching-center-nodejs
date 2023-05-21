  class FullNameManager {
    firstName = "";
    parentName = "";
    grandParentName = "";
    familyName = "";

    constructor(firstName, parentName, grandParentName, familyName) {
        this.setFirstName(firstName.trim());
        this.setParentName(parentName.trim());
        this.setGrandParentName(grandParentName.trim());
        this.setFamilyName(familyName.trim());
    }
    
    getFirstName() {
        return this.firstName;
    }
    setFirstName(value) {
        if (!this.validateInput(value)) {
            // throw new UndefinedValueError(ErrorEnums.undefined);
        }
        this.firstName = value;
    }
    getParentName() {
        return this.parentName;
    }
    setParentName(value) {
        if (!this.validateInput(value)) {
            // throw new UndefinedValueError(ErrorEnums.undefined);
        }
        this.parentName = value;
    }
    getGrandParentName() {
        return this.grandParentName;
    }
    setGrandParentName(value) {
        if (!this.validateInput(value)) {
            // throw new UndefinedValueError(ErrorEnums.undefined);
        }
        this.grandParentName = value;
    }
    getFamilyName() {
        return this.familyName;
    }
    setFamilyName(value) {
        if (!this.validateInput(value)) {
            // throw new UndefinedValueError(ErrorEnums.undefined);
        }
        this.familyName = value;
    }
    equals(name) {
        const firstNameEquals = this.firstName === name.getFirstName();
        const parentNameEquals = this.parentName === name.getParentName();
        const grandParentNameEquals = this.grandParentName === name.getGrandParentName();
        const result = firstNameEquals && parentNameEquals && grandParentNameEquals ? true : false;
        return result;
    }
    validateInput(input) {
        return input ? true : false;
    }
}
export default FullNameManager;
