"use strict";
exports.__esModule = true;
var pessoaRepository_1 = require("../../repository/Pessoa/pessoaRepository");
var PessoaService = /** @class */ (function () {
    function PessoaService() {
    }
    PessoaService.prototype.getAllPessosas = function () {
        return pessoaRepository_1["default"].findAll();
    };
    ;
    PessoaService.prototype.getPessoaById = function (id) {
        return pessoaRepository_1["default"].findById(id);
    };
    ;
    PessoaService.prototype.createPessoa = function (pesssoa) {
        return pessoaRepository_1["default"].save(pesssoa);
    };
    ;
    PessoaService.prototype.updatePessoa = function (pesssoa, id) {
        return pessoaRepository_1["default"].update(pesssoa, id);
    };
    ;
    PessoaService.prototype.deletePessoa = function (id) {
        return pessoaRepository_1["default"].remove(id);
    };
    ;
    return PessoaService;
}());
exports["default"] = new PessoaService();
