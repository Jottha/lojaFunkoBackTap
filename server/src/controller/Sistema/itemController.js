"use strict";
exports.__esModule = true;
var error_handler_1 = require("./../../utils/error.handler");
var itemService_1 = require("../../services/Sistema/itemService");
var ItemController = /** @class */ (function () {
    function ItemController() {
    }
    ItemController.prototype.getAllItens = function (req, res) {
        itemService_1["default"].getAllItens()
            .then(function (itens) {
            res.send(itens).status(200);
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    ItemController.prototype.getItemById = function (req, res) {
        itemService_1["default"].getItemById(req.params.id)
            .then(function (item) {
            res.send(item).status(200);
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    ItemController.prototype.createItem = function (req, res) {
        itemService_1["default"].createItem(req.body)
            .then(function (item) {
            res.send(item).status(201);
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    ItemController.prototype.updateItem = function (req, res) {
        itemService_1["default"].updateItem(req.body, req.params.id)
            .then(function (item) {
            res.send(item).status(200);
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    ItemController.prototype.deleteItem = function (req, res) {
        itemService_1["default"].deleteItemById(req.params.id)
            .then(function (item) {
            res.send(item).status(200);
        })["catch"](function (error) { return error_handler_1.errorHandler(error, res); });
    };
    ;
    return ItemController;
}());
;
exports["default"] = new ItemController();
