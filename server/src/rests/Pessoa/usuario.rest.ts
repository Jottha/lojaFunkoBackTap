import UsuarioController from '../../controller/Pessoa/usuarioController';
import { Rest } from './../../interfaces/rest.interface';
import { Route } from '../../interfaces/route.interface';

class UsuarioRest implements Rest {
    
    urn: string = 'usuario';
    routes: Array<Route> = [
        {
            method: 'get', path: '/',
            action: UsuarioController.getAllUsuarioss
        },
        {
            method: 'get', path: '/:id',
            action: UsuarioController.getUsuarioById
        },
        {
            method: 'post', path: '/',
            action: UsuarioController.createUsuario
        },
        {
            method: 'put', path: '/:id',
            action: UsuarioController.updateUsuario
        },
        {
            method: 'delete', path: '/:id',
            action: UsuarioController.deleteUsuario
        }
    ];
};

export default new UsuarioRest();