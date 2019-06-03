"use strict";
exports.__esModule = true;
/* API MESSAGES */
exports.MSG_ERROR_DEFAULT_TO_FIND = function (nameSchema) { return "Ocorreu um erro ao buscar informa\u00E7\u00F5es em " + nameSchema; };
exports.MSG_ERROR_DEFAULT_TO_SAVE = function (nameSchema) { return "Ocorreu um erro ao salvar a informa\u00E7\u00E3o em " + nameSchema; };
exports.MSG_ERROR_DEFAULT_TO_UPDATE = function (nameSchema) { return "Ocorreu um erro ao atualizar a informa\u00E7\u00E3o de " + nameSchema + ", identificador n\u00E3o encontrado"; };
exports.MSG_ERROR_DEFAULT_TO_REMOVE = function (nameSchema) { return "Ocorreu um erro ao remover a informa\u00E7\u00E3o de " + nameSchema + ", identificador n\u00E3o encontrado"; };
exports.MSG_ERROR_TO_INVALID_TOKEN = "Voc\u00EA possui autoriza\u00E7\u00E3o para consumir este caminho devido a cave\u00E7alhos de autentica\u00E7\u00E3o inv\u00E1lidos";
exports.MSG_ERROR_TO_INVALID_FIELD = function (fieldName, fieldRule) { return "O valor do campo " + fieldName + " deve atender a seguinte regra: " + fieldRule; };
exports.MSG_ERROR_MISSING_AUTHORIZATION_IN_HEADERS = "Voc\u00EA n\u00E3o possui autoriza\u00E7\u00E3o para consumir este caminho devido a aus\u00EAncia de cabe\u00E7alhos de autentica\u00E7\u00E3o";
/* WEB MESSAGES */
exports.MSG_ERROR_TO_WRONG_USERNAME_PASSAWORD = "N\u00E3o foi possivel efetuar login, nome de acesso ou senha est\u00E3o incorretas";
exports.MSG_ERROR_TO_USERNAME_ALREADY_IN_USE = "N\u00E3o foi possivel efetuar registro, nome de acesso j\u00E1 em uso";
exports.MSG_ERROR_TO_CONTACT_TO_ADMIN = "Ocorreu um erro inesperado por favor tente novamente, caso o erro persistir entre em contato com o administrador do sistema";
