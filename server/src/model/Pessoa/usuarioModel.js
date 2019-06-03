"use strict";
exports.__esModule = true;
var UsuarioModel = /** @class */ (function () {
    function UsuarioModel() {
    }
    UsuarioModel.prototype.getSchema = function () {
        return {
            username: { type: String, required: true, unique: true, minlength: 5, maxlength: 20 },
            password: { type: String, required: true, minlength: 6, maxlength: 64 },
            rule: { type: String, "enum": ["CLIENTE", "ADMIN"], required: true },
            idPeople: { type: String, require: true, unique: true }
        };
    };
    ;
    return UsuarioModel;
}());
;
exports["default"] = UsuarioModel;
