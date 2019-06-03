"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var mongoose_abstract_1 = require("../../interfaces/mongoose.abstract");
var usuarioModel_1 = require("../../model/Pessoa/usuarioModel");
var UsuarioRepository = /** @class */ (function (_super) {
    __extends(UsuarioRepository, _super);
    function UsuarioRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UsuarioRepository;
}(mongoose_abstract_1["default"]));
;
exports["default"] = new UsuarioRepository(new usuarioModel_1["default"]());
