"use strict";
exports.__esModule = true;
var environment_prod_1 = require("./environment.prod");
exports.Config = {
    API_NAME: 'Livraria',
    VERSION: '0.0.1',
    VERSION_URL: 'v1',
    SECRET_KEY: 'livraria',
    TOKEN_PREF: 'Bearer',
    TOKEN_HEADER: 'Authorization',
    //PROFILE: dev,
    PROFILE: environment_prod_1.prod,
    PORT: 3000,
    HOST: 'localhost'
};
