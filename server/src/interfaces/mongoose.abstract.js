"use strict";
exports.__esModule = true;
var error_model_1 = require("./../utils/error.model");
var mongoose_1 = require("mongoose");
var mongoose = require("mongoose");
var message = require("../../environments/messages.const");
var Mongooserepository = /** @class */ (function () {
    function Mongooserepository(schemaObject) {
        this.schema = new mongoose_1.Schema(schemaObject.getSchema(), this.getConfigurationInSchema());
        this.nameSchema = Object.getPrototypeOf(schemaObject).constructor.name;
        this.model = mongoose.model(this.nameSchema, this.schema);
    }
    Mongooserepository.prototype.save = function (arg) {
        var _this = this;
        return this.model.create(arg)
            .then(function (document) { return document.toJSON(); })["catch"](function (error) {
            throw new error_model_1.ErrorModel(message.MSG_ERROR_DEFAULT_TO_SAVE(_this.nameSchema), error);
        });
    };
    ;
    Mongooserepository.prototype.remove = function (id) {
        var _this = this;
        return this.model.findByIdAndRemove(id)
            .then(function (document) { return document.toJSON(); })["catch"](function (error) {
            throw new error_model_1.ErrorModel(message.MSG_ERROR_DEFAULT_TO_REMOVE(_this.nameSchema), error);
        });
    };
    ;
    Mongooserepository.prototype.update = function (arg, id) {
        var _this = this;
        return this.model.findByIdAndUpdate(id, arg, { "new": true })
            .then(function (document) { return document.toJSON(); })["catch"](function (error) {
            throw new error_model_1.ErrorModel(message.MSG_ERROR_DEFAULT_TO_UPDATE(_this.nameSchema), error);
        });
    };
    ;
    Mongooserepository.prototype.findAll = function () {
        var _this = this;
        return this.model.find()
            .then(function (document) { return document.map(function (document) { return document.toJSON(); }); })["catch"](function (error) {
            throw new error_model_1.ErrorModel(message.MSG_ERROR_DEFAULT_TO_FIND(_this.nameSchema), error);
        });
    };
    ;
    Mongooserepository.prototype.findById = function (id) {
        var _this = this;
        return this.model.findById(id)
            .then(function (document) { return document.toJSON(); })["catch"](function (error) {
            throw new error_model_1.ErrorModel(message.MSG_ERROR_DEFAULT_TO_FIND(_this.nameSchema), error);
        });
    };
    ;
    Mongooserepository.prototype.findAllByFilter = function (filter) {
        var _this = this;
        return this.model.find(filter)
            .then(function (documents) { return documents.map(function (document) { return document.toJSON(); }); })["catch"](function (error) {
            throw new error_model_1.ErrorModel(message.MSG_ERROR_DEFAULT_TO_FIND(_this.nameSchema), error);
        });
    };
    ;
    Mongooserepository.prototype.findByFilter = function (filter) {
        var _this = this;
        return this.model.findOne(filter)
            .then(function (document) { return document.toJSON(); })["catch"](function (error) {
            throw new error_model_1.ErrorModel(message.MSG_ERROR_DEFAULT_TO_FIND(_this.nameSchema), error);
        });
    };
    ;
    Mongooserepository.prototype.getConfigurationInSchema = function () {
        return {
            versionKey: false,
            timestamp: { createdAt: 'created_at', updateAt: 'update_at' }
        };
    };
    ;
    return Mongooserepository;
}());
;
exports["default"] = Mongooserepository;
