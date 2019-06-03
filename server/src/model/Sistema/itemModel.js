"use strict";
exports.__esModule = true;
var ItemModel = /** @class */ (function () {
    function ItemModel() {
    }
    ItemModel.prototype.getSchema = function () {
        return {
            perfil: { type: String, required: true },
            valor: { type: Number, required: true },
            descricao: { type: String, required: true }
        };
    };
    ;
    return ItemModel;
}());
;
exports["default"] = ItemModel;
