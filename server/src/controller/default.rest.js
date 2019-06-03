"use strict";
exports.__esModule = true;
var environments_1 = require("./../../environments/environments");
var DefaultController = /** @class */ (function () {
    function DefaultController() {
    }
    ;
    DefaultController.prototype.getDefaultResponse = function (req, res) {
        res.send("<br>" + environments_1.Config.API_NAME + " - VERSION: " + environments_1.Config.VERSION + " - PROFILE: " + environments_1.Config.PROFILE.NAME + " <>");
    };
    ;
    return DefaultController;
}());
;
exports["default"] = new DefaultController;
