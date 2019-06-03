"use strict";
exports.__esModule = true;
function errorHandler(errorModel, response) {
    console.error("---------------------------------------------------------------------\n                    \n time: " + errorModel.timestamp + " - HTTP_STATUS[" + errorModel.status + "]\n                    \n message: " + errorModel.message + "\n                    \n error: " + errorModel.error + " stack: " + errorModel.stack + "\n                    \n---------------------------------------------------------------------");
    response.status(errorModel.status);
    response.send(errorModel);
}
exports.errorHandler = errorHandler;
;
