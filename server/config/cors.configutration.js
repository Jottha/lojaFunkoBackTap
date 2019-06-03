"use strict";
exports.__esModule = true;
var environments_1 = require("./../environments/environments");
var CorsConfiguration = /** @class */ (function () {
    function CorsConfiguration() {
        this.allowedHeaders = ["Origin", "X-Requested-With", "Content-Type", "Accept", "Acess-Control-Allow-Headers", environments_1.Config.TOKEN_HEADER];
        this.credentials = true;
        this.methods = ["GET", "HEAD", "OPTIONS", "PUT", "PATCH", "POST", "DELETE"];
        this.origin = '*';
        this.exposedHeaders = ["Access-Control-Expose-Headers", environments_1.Config.TOKEN_HEADER];
    }
    ;
    return CorsConfiguration;
}());
;
exports["default"] = new CorsConfiguration;
