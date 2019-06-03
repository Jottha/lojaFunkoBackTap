"use strict";
exports.__esModule = true;
var messages_const_1 = require("../../environments/messages.const");
var error_handler_1 = require("./../utils/error.handler");
var error_model_1 = require("./../utils/error.model");
var mongoose_1 = require("mongoose");
var environments_1 = require("./../../environments/environments");
var jwt = require("jsonwebtoken");
var httpStatus = require("http-status");
var TokenService = /** @class */ (function () {
    function TokenService() {
    }
    TokenService.prototype.tokenUpdate = function (decoded) {
        var usuarioIdDecoded = decoded.idUsuario;
        var administradorDecoded = decoded.idAdministrador;
        var nameDecoded = decoded.name;
        var ruleDecoded = decoded.rule;
        var token = jwt.sign({
            idUsuario: usuarioIdDecoded,
            idAdministrador: administradorDecoded,
            name: nameDecoded,
            rule: ruleDecoded
        }, environments_1.Config.SECRET_KEY, { expiresIn: '1d' });
        return 'Bearer ' + token;
    };
    ;
    TokenService.prototype.extractToken = function (req, res, next) {
        var _this = this;
        return new mongoose_1.Promise(function (resolve, reject) {
            var authorization = req.header(environments_1.Config.TOKEN_HEADER);
            var error = _this.getMissingAuthorization();
            if (authorization) {
                var bearer = authorization.split(" ");
                if (bearer[0] === 'Bearer') {
                    resolve(bearer[1]);
                }
                else {
                    error_handler_1.errorHandler(error, res);
                    reject(error);
                }
            }
            else {
                error_handler_1.errorHandler(error, res);
                reject(error);
            }
        });
    };
    ;
    TokenService.prototype.buildToken = function (usuario, idAdministrador, name) {
        return "Bearer " + jwt.sign({
            idUsuario: usuario._id,
            idAdministrador: idAdministrador,
            name: name,
            rule: usuario.rule
        }, environments_1.Config.SECRET_KEY, { expiresIn: '1d' });
    };
    ;
    TokenService.prototype.getMissingAuthorization = function () {
        return new error_model_1.ErrorModel(messages_const_1.MSG_ERROR_MISSING_AUTHORIZATION_IN_HEADERS, true, httpStatus.NOT_ACCEPTABLE);
    };
    ;
    return TokenService;
}());
;
exports["default"] = new TokenService();
