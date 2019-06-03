"use strict";
exports.__esModule = true;
var usuarioService_1 = require("../../services/Pessoa/usuarioService");
var error_handler_1 = require("../../utils/error.handler");
var UsuarioController = /** @class */ (function () {
    function UsuarioController() {
    }
    UsuarioController.prototype.getAllUsuarioss = function (req, res) {
        usuarioService_1["default"].getAllUsuarios()
            .then(function (usuario) {
            res.send(usuario);
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    UsuarioController.prototype.getUsuarioById = function (req, res) {
        usuarioService_1["default"].getUsuarioById(req.params.id)
            .then(function (usuario) {
            res.send(usuario).status(200);
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    UsuarioController.prototype.createUsuario = function (req, res) {
        usuarioService_1["default"].createUsuario(req.body)
            .then(function (usuario) {
            res.send(usuario);
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    UsuarioController.prototype.updateUsuario = function (req, res) {
        usuarioService_1["default"].updateUsuario(req.body, req.params.id)
            .then(function (usuario) {
            res.send(usuario);
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    UsuarioController.prototype.deleteUsuario = function (req, res) {
        usuarioService_1["default"].deleteUsuario(req.params.id)
            .then(function (usuario) {
            res.send().status(200);
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    return UsuarioController;
}());
;
exports["default"] = new UsuarioController();
