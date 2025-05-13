const CustomAPIError = require('./custom-error');
const BadRequestError = require('./bad-request');
const unAuthError = require('./unauth');

module.exports = {
    CustomAPIError, BadRequestError, unAuthError
}