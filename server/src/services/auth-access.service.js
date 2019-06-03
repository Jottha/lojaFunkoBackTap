"use strict";
exports.__esModule = true;
var regexs_1 = require("../utils/regexs");
var error_model_1 = require("../utils/error.model");
var bcrypt = require("bcrypt");
var usuarioRepository_1 = require("../repository/Pessoa/usuarioRepository");
var pessoaRepository_1 = require("../repository/Pessoa/pessoaRepository");
var pessoaModel_1 = require("../model/Pessoa/pessoaModel");
var token_service_1 = require("../security/token.service");
var usuarioModel_1 = require("../model/Pessoa/usuarioModel");
var message = require("../../environments/messages.const");
var pessoaService_1 = require("./Pessoa/pessoaService");
var usuarioService_1 = require("./Pessoa/usuarioService");
var httpStatus = require("httpstatus");
var AuthAccessservice = /** @class */ (function () {
    function AuthAccessservice() {
    }
    //Recebe um usuario ou retornar um error
    AuthAccessservice.prototype.login = function (usuario) {
        var _this = this;
        //Chama o metodo para indentificar o usuario pelo o seu nome
        return this.findByUsername(usuario.username)
            //Após identificar o usuario
            //Cria um objeto usuarioBase do tipo UsuarioModel
            .then(function (usuarioBase) {
            //Compora o password do objeto criado com um password de um objeto existente
            //Caso seja
            if (bcrypt.compareSync(usuario.password, usuarioBase.password)) {
                //Cria-se uma variavel que será um id, onde receberá o id do objeto criado
                var idPeople_1 = usuarioBase.idPeople;
                //
                return pessoaRepository_1["default"].findById(idPeople_1).then(function (pessoa) {
                    return token_service_1["default"].buildToken(usuarioBase, idPeople_1, pessoa.name);
                })["catch"](function (error) {
                    return error;
                });
            }
            ;
            return _this.getErrorForbidden();
        })["catch"](function () {
            return _this.getErrorForbidden();
        });
    };
    ;
    AuthAccessservice.prototype.register = function (body) {
        var _this = this;
        var usuario = new usuarioModel_1["default"]();
        var pessoa = new pessoaModel_1["default"]();
        usuario.rule = "ADMIN";
        usuario.username = body.username;
        usuario.password = body.password;
        pessoa.name = body.name;
        return this.findByUsername(usuario.username).then(function (usuario) {
            return _this.getErrorUsername();
        })["catch"](function (error) {
            if (!regexs_1.REGEX_USERNAME.test(usuario.username)) {
                return new error_model_1.ErrorModel(message.MSG_ERROR_TO_INVALID_FIELD('Nome de acesso', 'apenas letras minúsculas, ' +
                    'com tamanho mínino [ 5 ] e no máximo [ 30 ] podendo conter numeros e . _ -'), {}, 400);
            }
            else {
                if (usuario.password.length < 6 || usuario.password.length > 32) {
                    return new error_model_1.ErrorModel(message.MSG_ERROR_TO_INVALID_FIELD('Senha', 'tamanho mínimo [ 6 ] e no máximo [ 32 ]'), {}, 400);
                }
                else {
                    return pessoaService_1["default"].createPessoa(pessoa).then(function (novaPessoa) {
                        usuario.idPeople = novaPessoa._id;
                        return usuarioService_1["default"].createUsuario(usuario).then(function (usuario) {
                            return usuario;
                        });
                    })["catch"](function (error) {
                        return new error_model_1.ErrorModel(message.MSG_ERROR_TO_INVALID_FIELD('Nome', 'tamanho mínimo [ 5 ] e no máximo [ 20 ]'), {}, 400);
                    });
                }
                ;
            }
            ;
        });
    };
    ;
    AuthAccessservice.prototype.findByUsername = function (username) {
        return usuarioRepository_1["default"].findByFilter({ username: username });
    };
    ;
    AuthAccessservice.prototype.getErrorForbidden = function () {
        return new error_model_1.ErrorModel(message.MSG_ERROR_TO_WRONG_USERNAME_PASSAWORD, Error, httpStatus.FORBIDDEN);
    };
    ;
    AuthAccessservice.prototype.getErrorUsername = function () {
        return new error_model_1.ErrorModel(message.MSG_ERROR_TO_USERNAME_ALREADY_IN_USE, Error, httpStatus.BAD_REQUEST);
    };
    ;
    return AuthAccessservice;
}());
;
exports["default"] = new AuthAccessservice();
