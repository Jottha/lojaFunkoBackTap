import { MSG_ERROR_MISSING_AUTHORIZATION_IN_HEADERS } from '../../environments/messages.const';
import { errorHandler } from './../utils/error.handler';
import { ErrorModel } from './../utils/error.model';
import { Request, Response } from 'express';
import { Promise } from 'mongoose';
import { Config } from './../../environments/environments';
import * as jwt from 'jsonwebtoken';
import * as httpStatus from "http-status";


class TokenService {

    tokenUpdate(decoded: any) {

        let usuarioIdDecoded = decoded.idUsuario;
        let administradorDecoded = decoded.idAdministrador;
        let nameDecoded = decoded.name;
        let ruleDecoded = decoded.rule;
        

        let token = jwt.sign({
            idUsuario : usuarioIdDecoded,
            idAdministrador: administradorDecoded,
            name: nameDecoded,
            rule: ruleDecoded
        }, Config.SECRET_KEY, { expiresIn:'1d' });

        return 'Bearer ' + token;
    };

    extractToken(req: Request, res: Response, next): Promise<String | ErrorModel> {
        return new Promise((resolve, reject) => {
            const authorization = req.header(Config.TOKEN_HEADER);
            const error = this.getMissingAuthorization();
            if(authorization){
                let bearer = authorization.split(" ");

                if(bearer[0] === 'Bearer') {
                    resolve(bearer[1]);
                } else {
                    errorHandler(error, res);
                    reject(error);
                }
            } else {
                errorHandler(error, res);
                reject(error);
            }
        });

    };

    buildToken(usuario: any, idAdministrador: String, name: String) {
        return "Bearer " + jwt.sign({
            idUsuario : usuario._id,
            idAdministrador: idAdministrador,
            name: name,
            rule: usuario.rule
        }, Config.SECRET_KEY, { expiresIn: '1d' });
    };

    private getMissingAuthorization() {
        return new ErrorModel(MSG_ERROR_MISSING_AUTHORIZATION_IN_HEADERS, true, httpStatus.NOT_ACCEPTABLE);
    };
    
};

export default new TokenService();