"use strict";
exports.__esModule = true;
var usuarioController_1 = require("../../controller/Pessoa/usuarioController");
var UsuarioRest = /** @class */ (function () {
    function UsuarioRest() {
        this.urn = 'usuario';
        this.routes = [
            {
                method: 'get', path: '/',
                action: usuarioController_1["default"].getAllUsuarioss
            },
            {
                method: 'get', path: '/:id',
                action: usuarioController_1["default"].getUsuarioById
            },
            {
                method: 'post', path: '/',
                action: usuarioController_1["default"].createUsuario
            },
            {
                method: 'put', path: '/:id',
                action: usuarioController_1["default"].updateUsuario
            },
            {
                method: 'delete', path: '/:id',
                action: usuarioController_1["default"].deleteUsuario
            }
        ];
    }
    return UsuarioRest;
}());
;
exports["default"] = new UsuarioRest();
