"use strict";
exports.__esModule = true;
var itemRepository_1 = require("../../repository/Sistema/itemRepository");
var ItemService = /** @class */ (function () {
    function ItemService() {
    }
    ItemService.prototype.getAllItens = function () {
        return itemRepository_1["default"].findAll();
    };
    ;
    ItemService.prototype.getItemById = function (id) {
        return itemRepository_1["default"].findById(id);
    };
    ;
    ItemService.prototype.createItem = function (item) {
        return itemRepository_1["default"].save(item);
    };
    ;
    ItemService.prototype.updateItem = function (item, id) {
        return itemRepository_1["default"].update(item, id);
    };
    ;
    ItemService.prototype.deleteItemById = function (id) {
        return itemRepository_1["default"].remove(id);
    };
    ;
    return ItemService;
}());
;
exports["default"] = new ItemService();
