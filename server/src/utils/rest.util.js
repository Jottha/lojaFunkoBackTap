"use strict";
exports.__esModule = true;
var RestUtil = /** @class */ (function () {
    function RestUtil() {
    }
    RestUtil.prototype.createRoutes = function (app, prefix, rest) {
        var _this = this;
        rest.routes.map(function (route) {
            _this.createRoute(app, prefix, rest.urn, route);
        });
    };
    ;
    RestUtil.prototype.createRoute = function (app, prefix, urn, route) {
        app.route("/" + prefix + "/" + urn + route.path)[route.method](route.action);
        return app;
    };
    ;
    return RestUtil;
}());
;
exports["default"] = new RestUtil();
