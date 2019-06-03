"use strict";
exports.__esModule = true;
var itemController_1 = require("../../controller/Sistema/itemController");
var ItemRest = /** @class */ (function () {
    function ItemRest() {
        this.urn = 'acessorio';
        this.routes = [
            {
                method: 'get', path: '/',
                action: itemController_1["default"].getAllItens
            },
            {
                method: 'get', path: '/:id',
                action: itemController_1["default"].getItemById
            },
            {
                method: 'post', path: '/',
                action: itemController_1["default"].createItem
            },
            {
                method: 'put', path: '/:id',
                action: itemController_1["default"].updateItem
            },
            {
                method: 'delete', path: '/:id',
                action: itemController_1["default"].deleteItem
            }
        ];
    }
    return ItemRest;
}());
;
exports["default"] = new ItemRest();
