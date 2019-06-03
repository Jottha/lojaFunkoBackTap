"use strict";
exports.__esModule = true;
var auth_filter_configuration_1 = require("./../security/auth-filter.configuration");
var rest_util_1 = require("../utils/rest.util");
var environments_1 = require("../../environments/environments");
var default_rest_1 = require("./default.rest");
var auth_access_rest_1 = require("../rests/auth-access.rest");
var usuario_rest_1 = require("../rests/Pessoa/usuario.rest");
var item_rest_1 = require("./Sistema/item.rest");
var RestModule = /** @class */ (function () {
    function RestModule(app) {
        this.privateRoutes = [
            usuario_rest_1["default"],
            item_rest_1["default"]
        ];
        this.publicRoutes = [
            default_rest_1["default"],
            auth_access_rest_1["default"],
            item_rest_1["default"]
        ];
        this.publicRoutes.map(function (rest) {
            rest_util_1["default"].createRoutes(app, environments_1.Config.VERSION_URL + "/web/public", rest);
        });
        this.privateRoutes.map(function (rest) {
            new auth_filter_configuration_1.AuthenticationFilterConfiguration(app);
            rest_util_1["default"].createRoutes(app, environments_1.Config.VERSION_URL + "/web/private", rest);
        });
    }
    ;
    return RestModule;
}());
exports.RestModule = RestModule;
;
