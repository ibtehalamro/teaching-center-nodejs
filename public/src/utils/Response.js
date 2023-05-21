export const JSON_RESPONSE = (status, message = "", data = {}) => {
    return {
        status,
        message,
        data
    };
};

export const ResponseStatus = {
    success: "SUCCESS",
    fail: "FAIL",// something we don't expect
    error: "ERROR"// error happened
};