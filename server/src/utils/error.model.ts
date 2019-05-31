import * as httpStatus from 'http-status';

export class ErrorModel {

    message: String;
    stack: String;
    status: number;
    timestamp: Date;
    error: any;

    constructor(message: String, error?: any, status?: number, stack?: String){
        this.message = message;
        this.status = status ? status : httpStatus.INTERNAL_SERVER_ERROR;
        this.timestamp = new Date();
        this.stack = stack ? stack : 'missing stack trace';
        this.error = error;
    };

    toString(): String {
        return `status: ${this.status} - message: ${this.message} - ${this.error}`;
    };
};