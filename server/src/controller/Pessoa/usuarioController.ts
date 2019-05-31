import { ErrorModel } from './../../utils/error.model';
import { Request, Response } from 'express';
import usuarioService from '../../services/Pessoa/usuarioService';
import UsuarioModel from '../../model/Pessoa/usuarioModel';
import { errorHandler } from '../../utils/error.handler';


class UsuarioController {
    
    getAllUsuarioss(req: Request, res: Response) {        
        usuarioService.getAllUsuarios()
            .then((usuario: Array<UsuarioModel>) => {
                res.send(usuario);
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };

    getUsuarioById(req: Request, res: Response) {
        usuarioService.getUsuarioById(req.params.id)
            .then((usuario: UsuarioModel) => {
                res.send(usuario).status(200);
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };

    createUsuario(req: Request, res: Response) {
        usuarioService.createUsuario(req.body)
            .then((usuario: UsuarioModel) => {
                res.send(usuario);
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };

    updateUsuario(req: Request, res: Response) {
        usuarioService.updateUsuario(req.body, req.params.id)
            .then((usuario: UsuarioModel) => {
                res.send(usuario);
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };

    deleteUsuario(req: Request, res: Response) {
        usuarioService.deleteUsuario(req.params.id)
            .then((usuario: UsuarioModel) => {
                res.send().status(200);
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };
};

export default new UsuarioController();