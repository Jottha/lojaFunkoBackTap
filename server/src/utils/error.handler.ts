import { ErrorModel } from './error.model';
import { Response } from 'express';

export function errorHandler(errorModel: ErrorModel, response: Response) {
    console.error(`---------------------------------------------------------------------
                    \n time: ${errorModel.timestamp} - HTTP_STATUS[${errorModel.status}]
                    \n message: ${errorModel.message}
                    \n error: ${errorModel.error} stack: ${errorModel.stack}
                    \n---------------------------------------------------------------------`);
    response.status(errorModel.status);
    response.send(errorModel);
};