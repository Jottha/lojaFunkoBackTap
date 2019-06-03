"use strict";
var _this = this;
exports.__esModule = true;
var environments_1 = require("./environments/environments");
var app_1 = require("./app");
var port = process.env.PORT || environments_1.Config.PORT;
var app = new app_1.App();
app.server.listen(port, function () {
    console.log("server running in + " + port);
});
process.once('SIGUSR2', function () { return _this.app.closeDataBaseConnection('nodemon restart', function () { return process.kill(process.pid, 'SIGUSR2'); }); });
process.on('SIGINT', function () { return _this.app.closeDataBaseConnection('execução interrompida', function () { return process.exit(0); }); });
