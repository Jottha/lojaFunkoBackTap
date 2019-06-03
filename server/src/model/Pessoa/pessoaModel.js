"use strict";
exports.__esModule = true;
var PessoaModel = /** @class */ (function () {
    function PessoaModel() {
    }
    PessoaModel.prototype.getSchema = function () {
        return {
            name: { type: String, required: true, minlength: 5, masxlength: 20 },
            cpf: { type: String, required: true }
        };
    };
    ;
    return PessoaModel;
}());
;
exports["default"] = PessoaModel;
