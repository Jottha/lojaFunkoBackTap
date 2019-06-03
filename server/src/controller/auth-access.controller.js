"use strict";
exports.__esModule = true;
var environments_1 = require("../../environments/environments");
var httpStatus = require("http-status");
var auth_access_service_1 = require("../services/auth-access.service");
var error_handler_1 = require("./../utils/error.handler");
var AuthAccesController = /** @class */ (function () {
    function AuthAccesController() {
    }
    AuthAccesController.prototype.login = function (req, res) {
        auth_access_service_1["default"].login(req.body)
            .then(function (token) {
            res.setHeader(environments_1.Config.TOKEN_HEADER, token);
            res.status(httpStatus.OK).send();
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    AuthAccesController.prototype.register = function (req, res) {
        auth_access_service_1["default"].register(req.body)
            .then(function (usuario) {
            res.status(httpStatus.CREATED).send(usuario);
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    return AuthAccesController;
}());
;
exports["default"] = new AuthAccesController;
