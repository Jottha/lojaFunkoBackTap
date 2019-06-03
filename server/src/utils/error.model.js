"use strict";
exports.__esModule = true;
var httpStatus = require("http-status");
var ErrorModel = /** @class */ (function () {
    function ErrorModel(message, error, status, stack) {
        this.message = message;
        this.status = status ? status : httpStatus.INTERNAL_SERVER_ERROR;
        this.timestamp = new Date();
        this.stack = stack ? stack : 'missing stack trace';
        this.error = error;
    }
    ;
    ErrorModel.prototype.toString = function () {
        return "status: " + this.status + " - message: " + this.message + " - " + this.error;
    };
    ;
    return ErrorModel;
}());
exports.ErrorModel = ErrorModel;
;
