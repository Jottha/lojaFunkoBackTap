import { Config } from "../../environments/environments";
import UsuarioModel from '../model/Pessoa/usuarioModel';
import { ErrorModel } from "../utils/error.model";
import { Request, Response } from 'express';
import * as httpStatus from "http-status";
import AuthAccessService from "../services/auth-access.service";
import { errorHandler } from './../utils/error.handler';


class AuthAccesController {

    login(req: Request, res: Response) {
        AuthAccessService.login(req.body)
            .then((token: string) => {
                res.setHeader(Config.TOKEN_HEADER, token);
                res.status(httpStatus.OK).send();
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };

    register(req: Request, res: Response) {
        AuthAccessService.register(req.body)
            .then((usuario: UsuarioModel) => {
                res.status(httpStatus.CREATED).send(usuario);
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };

};

export default new AuthAccesController;