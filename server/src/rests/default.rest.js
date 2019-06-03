"use strict";
exports.__esModule = true;
var default_rest_1 = require("../controller/default.rest");
var DefaultRest = /** @class */ (function () {
    function DefaultRest() {
        this.urn = '';
        this.routes = [
            {
                method: 'get',
                path: '',
                action: default_rest_1["default"].getDefaultResponse
            }
        ];
    }
    return DefaultRest;
}());
;
exports["default"] = new DefaultRest;
