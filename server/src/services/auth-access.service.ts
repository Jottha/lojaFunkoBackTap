import { REGEX_USERNAME } from '../utils/regexs';
import { ErrorModel } from '../utils/error.model';
import * as bcrypt from "bcrypt";
import UsuarioRepository from "../repository/Pessoa/usuarioRepository";
import pessoaRepository from '../repository/Pessoa/pessoaRepository';
import PessoaModel from '../model/Pessoa/pessoaModel';
import tokenService from '../security/token.service';
import UsuarioModel from '../model/Pessoa/usuarioModel';
import * as message from '../../environments/messages.const';
import ResgisterDto from '../model/Pessoa/dtos/register.dto';
import usuarioController from '../controller/Pessoa/usuarioController';
import pessoaService from './Pessoa/pessoaService';
import usuarioService from './Pessoa/usuarioService';
import * as httpStatus from 'http-status';

class AuthAccessservice {
    //Recebe um usuario ou retornar um error
    login(usuario: UsuarioModel): Promise<string | ErrorModel> {
        //Chama o metodo para indentificar o usuario pelo o seu nome
        return this.findByUsername(usuario.username)
            //Após identificar o usuario
            //Cria um objeto usuarioBase do tipo UsuarioModel
            .then((usuarioBase: UsuarioModel) => {
                //Compora o password do objeto criado com um password de um objeto existente
                //Caso seja
                if (bcrypt.compareSync(usuario.password, usuarioBase.password)) {
                    //Cria-se uma variavel que será um id, onde receberá o id do objeto criado
                    let idPeople = usuarioBase.idPeople;
                    //
                    return pessoaRepository.findById(idPeople).then((pessoa: PessoaModel) => {
                        return tokenService.buildToken(usuarioBase, idPeople, pessoa.name);
                    }).catch((error: ErrorModel) => {
                        return error;
                    });
                };
                return this.getErrorForbidden();
            }).catch(() => {
                return this.getErrorForbidden();
            });
    };

    register(body: ResgisterDto): Promise<UsuarioModel | ErrorModel> {
        let usuario = new UsuarioModel();
        let pessoa = new PessoaModel();

        usuario.rule = "ADMIN";
        usuario.username = body.username;
        usuario.password = body.password;

        pessoa.name = body.name;

        return this.findByUsername
        (usuario.username).then((usuario: UsuarioModel) => {
            return this.getErrorUsername();
        }).catch((error: ErrorModel) => {
            if (!REGEX_USERNAME.test(usuario.username)) {
                return new ErrorModel(message.MSG_ERROR_TO_INVALID_FIELD('Nome de acesso', 'apenas letras minúsculas, ' +
                    'com tamanho mínino [ 5 ] e no máximo [ 30 ] podendo conter numeros e . _ -'), {}, 400);
            } else {
                if (usuario.password.length < 6 || usuario.password.length > 32) {
                    return new ErrorModel(message.MSG_ERROR_TO_INVALID_FIELD('Senha', 'tamanho mínimo [ 6 ] e no máximo [ 32 ]'), {}, 400);
                } else {
                    return pessoaService.createPessoa(pessoa).then((novaPessoa: PessoaModel) => {
                        usuario.idPeople = novaPessoa._id;
                        return usuarioService.createUsuario(usuario).then((usuario: UsuarioModel) => {
                            return usuario;
                        })
                    }).catch((error: ErrorModel) => {
                        return new ErrorModel(message.MSG_ERROR_TO_INVALID_FIELD('Nome', 'tamanho mínimo [ 5 ] e no máximo [ 20 ]'), {}, 400);
                    });
                };
            };
        });
    };

    private findByUsername(username: string) {
        return UsuarioRepository.findByFilter({ username: username });
    };

    private getErrorForbidden(): ErrorModel {
        return new ErrorModel(message.MSG_ERROR_TO_WRONG_USERNAME_PASSAWORD, Error, httpStatus.FORBIDDEN);
    };

    private getErrorUsername(): ErrorModel {
        return new ErrorModel(message.MSG_ERROR_TO_USERNAME_ALREADY_IN_USE, Error, httpStatus.BAD_REQUEST);
    };
};

export default new AuthAccessservice();