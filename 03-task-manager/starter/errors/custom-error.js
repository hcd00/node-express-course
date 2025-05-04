
class CustomAPIError extends Error {
    constructor(message,statusCode){
        //invokes parent
        super(message)
        this.statusCode = statusCode
    }
}

const createCustomErr = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode);
}
module.exports = {CustomAPIError, createCustomErr};