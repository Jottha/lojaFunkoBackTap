"use strict";
exports.__esModule = true;
var bcrypt_1 = require("./../../utils/bcrypt");
var regexs_1 = require("./../../utils/regexs");
var error_model_1 = require("./../../utils/error.model");
var usuarioRepository_1 = require("../../repository/Pessoa/usuarioRepository");
var message = require("../../../environments/messages.const");
var promise_1 = require("promise");
var UsuarioService = /** @class */ (function () {
    function UsuarioService() {
    }
    UsuarioService.prototype.getAllUsuarios = function () {
        return usuarioRepository_1["default"].findAll();
    };
    ;
    UsuarioService.prototype.getUsuarioById = function (id) {
        return usuarioRepository_1["default"].findById(id);
    };
    ;
    UsuarioService.prototype.createUsuario = function (usuario) {
        var error = this.validateUser(usuario);
        if (!error) {
            usuario.password = bcrypt_1.bcryptPassword(usuario.password);
            return usuarioRepository_1["default"].save(usuario);
        }
        ;
        return promise_1.reject(error);
    };
    ;
    UsuarioService.prototype.validateUser = function (usuario) {
        if (!regexs_1.REGEX_USERNAME.test(usuario.username)) {
            return new error_model_1.ErrorModel(message.MSG_ERROR_TO_INVALID_FIELD('Nome de acesso', 'apenas letras minúsculas, ' +
                'com tamanho mínino [ 5 ] e no máximo [ 30 ] podendo conter numeros e . _ -'), {}, 400);
        }
        ;
        if (usuario.password.length < 6 || usuario.password.length > 32) {
            return new error_model_1.ErrorModel(message.MSG_ERROR_TO_INVALID_FIELD('Senha', 'tamanho mínimo [ 6 ] e no máximo [ 32 ]'), {}, 400);
        }
        ;
    };
    ;
    UsuarioService.prototype.updateUsuario = function (usuario, id) {
        var error = this.validateUser(usuario);
        if (!error) {
            usuario.password = bcrypt_1.bcryptPassword(usuario.password);
            return usuarioRepository_1["default"].update(usuario, id);
        }
        ;
        return promise_1.reject(error);
    };
    ;
    UsuarioService.prototype.deleteUsuario = function (id) {
        return usuarioRepository_1["default"].remove(id);
    };
    ;
    return UsuarioService;
}());
;
exports["default"] = new UsuarioService();
