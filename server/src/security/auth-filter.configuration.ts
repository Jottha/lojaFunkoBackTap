import TokenService from './token.service';
import { ErrorModel } from '../utils/error.model';
import { Application } from 'express';
import * as httpStatus from 'http-status';
import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import { Config } from "../../environments/environments";
import * as message from '../../environments/messages.const';



export class AuthenticationFilterConfiguration {

    constructor(app: Application) {
        app.use(this.doFilter);
    };

    doFilter(req: Request, res: Response, next: NextFunction) {

        TokenService.extractToken(req, res, next).then((token: string) => {
            jwt.verify(token, Config.SECRET_KEY, (error, decoded) => {
                if(!error) {
                    const TokenUpdated = TokenService.tokenUpdate(decoded);
                    res.setHeader(Config.TOKEN_HEADER, TokenUpdated);
                    next();
                } else {
                    res.status(httpStatus.UNAUTHORIZED).send(new ErrorModel(message.MSG_ERROR_TO_INVALID_TOKEN, error, httpStatus.UNAUTHORIZED));
                };
            });
        }).catch((error:ErrorModel) => res.send(error));
    };
};