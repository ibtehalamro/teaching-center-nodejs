class UndefinedValueError extends Error {
    constructor(message) {
        super(message);
        this.name = "UndefinedValueError";
    }
}
export default UndefinedValueError;
