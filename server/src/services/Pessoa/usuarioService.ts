import { bcryptPassword } from './../../utils/bcrypt';
import { REGEX_USERNAME } from './../../utils/regexs';
import { ErrorModel } from './../../utils/error.model';
import usuarioRepository from '../../repository/Pessoa/usuarioRepository';
import UsuarioModel from '../../model/Pessoa/usuarioModel';
import * as message from '../../../environments/messages.const';
import { reject } from 'promise';


class UsuarioService {
    
    getAllUsuarios(): Promise<Array<UsuarioModel> | ErrorModel> {
        return usuarioRepository.findAll();   
    };

    getUsuarioById(id: string): Promise<UsuarioModel | ErrorModel> {
        return usuarioRepository.findById(id);
    };

    createUsuario(usuario: UsuarioModel): Promise<UsuarioModel | ErrorModel> {
        const error: ErrorModel = this.validateUser(usuario);
        if (!error) {
            usuario.password = bcryptPassword(usuario.password);
            return usuarioRepository.save(usuario);
        };
        return reject(error);
    };

    validateUser(usuario: UsuarioModel) {
        if (!REGEX_USERNAME.test(usuario.username)) {
            return new ErrorModel(message.MSG_ERROR_TO_INVALID_FIELD('Nome de acesso', 'apenas letras minúsculas, ' + 
                'com tamanho mínino [ 5 ] e no máximo [ 30 ] podendo conter numeros e . _ -'), {}, 400);
        };

        if (usuario.password.length < 6 || usuario.password.length > 32) {
            return new ErrorModel(message.MSG_ERROR_TO_INVALID_FIELD('Senha', 'tamanho mínimo [ 6 ] e no máximo [ 32 ]'), {}, 400);
        };
    };    

    updateUsuario(usuario: UsuarioModel, id: string): Promise<UsuarioModel | ErrorModel> {
        const error: ErrorModel = this.validateUser(usuario);
        if (!error) {
            usuario.password = bcryptPassword(usuario.password);
            return usuarioRepository.update(usuario, id);
        };
        return reject(error);
    };

    deleteUsuario(id: string): Promise<UsuarioModel | ErrorModel> {
        return usuarioRepository.remove(id);
    };
};

export default new UsuarioService();