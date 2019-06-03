"use strict";
exports.__esModule = true;
var morgan = require("morgan");
var express = require("express");
var body_parser_1 = require("body-parser");
var cors = require("cors");
var http_1 = require("http");
var database_configuration_1 = require("./config/database.configuration");
var rests_1 = require("./src/rests/rests");
var CorsConfiguration = require("../server/config/cors.configutration");
var App = /** @class */ (function () {
    function App() {
        this.dataBase = new database_configuration_1["default"]();
        this.dataBase.createConnection();
        this.app = express();
        this.server = http_1.createServer(this.app);
        this.app.use(cors(CorsConfiguration), morgan("dev"), body_parser_1.json(), body_parser_1.urlencoded({ extended: false }));
        new rests_1.RestModule(this.app);
    }
    ;
    App.prototype.closedataBaseConnection = function (message, callback) {
        this.dataBase.closeConnection(message, function () { return callback(); });
    };
    ;
    return App;
}());
exports.App = App;
;
