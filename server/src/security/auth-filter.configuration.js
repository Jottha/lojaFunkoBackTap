"use strict";
exports.__esModule = true;
var token_service_1 = require("./token.service");
var error_model_1 = require("../utils/error.model");
var httpStatus = require("http-status");
var jwt = require("jsonwebtoken");
var environments_1 = require("../../environments/environments");
var message = require("../../environments/messages.const");
var AuthenticationFilterConfiguration = /** @class */ (function () {
    function AuthenticationFilterConfiguration(app) {
        app.use(this.doFilter);
    }
    ;
    AuthenticationFilterConfiguration.prototype.doFilter = function (req, res, next) {
        token_service_1["default"].extractToken(req, res, next).then(function (token) {
            jwt.verify(token, environments_1.Config.SECRET_KEY, function (error, decoded) {
                if (!error) {
                    var TokenUpdated = token_service_1["default"].tokenUpdate(decoded);
                    res.setHeader(environments_1.Config.TOKEN_HEADER, TokenUpdated);
                    next();
                }
                else {
                    res.status(httpStatus.UNAUTHORIZED).send(new error_model_1.ErrorModel(message.MSG_ERROR_TO_INVALID_TOKEN, error, httpStatus.UNAUTHORIZED));
                }
                ;
            });
        })["catch"](function (error) { return res.send(error); });
    };
    ;
    return AuthenticationFilterConfiguration;
}());
exports.AuthenticationFilterConfiguration = AuthenticationFilterConfiguration;
;
