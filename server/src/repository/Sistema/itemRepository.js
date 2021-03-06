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
var itemModel_1 = require("../../model/Sistema/itemModel");
var ItemRepository = /** @class */ (function (_super) {
    __extends(ItemRepository, _super);
    function ItemRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ItemRepository;
}(mongoose_abstract_1["default"]));
;
exports["default"] = new ItemRepository(new itemModel_1["default"]);
