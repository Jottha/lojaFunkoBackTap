"use strict";
exports.__esModule = true;
var auth_access_controller_1 = require("../controller/auth-access.controller");
var AuthRest = /** @class */ (function () {
    function AuthRest() {
        this.urn = 'auth';
        this.routes = [
            {
                method: 'post', path: '/register',
                action: auth_access_controller_1["default"].register
            },
            {
                method: 'post', path: '/logar',
                action: auth_access_controller_1["default"].login
            }
        ];
    }
    return AuthRest;
}());
exports["default"] = new AuthRest;
