"use strict";
exports.__esModule = true;
var environments_1 = require("./../environments/environments");
var mongoose = require("mongoose");
var DatabaseConfiguration = /** @class */ (function () {
    function DatabaseConfiguration() {
    }
    DatabaseConfiguration.prototype.createConnection = function () {
        mongoose.connect(environments_1.Config.PROFILE.DB_URI);
        this.logger();
    };
    ;
    DatabaseConfiguration.prototype.logger = function () {
        this.dbConnection = mongoose.connection;
        this.dbConnection.on('connected', function () { return console.log("DATABASE - mongose is connected in " + environments_1.Config.PROFILE.DB_URI); });
        this.dbConnection.on('error', function (error) { return console.log("DATABASE - connection error: " + error); });
        this.dbConnection.on('disconnected', function () { return console.log("DATABASE - mongose is disconnected in " + environments_1.Config.PROFILE.DB_URI); });
    };
    ;
    DatabaseConfiguration.prototype.closeConnection = function (message, callback) {
        this.dbConnection.close(function () {
            console.log("DATABASE - mongoose was desconeted " + message);
        });
    };
    ;
    return DatabaseConfiguration;
}());
;
exports["default"] = DatabaseConfiguration;
