"use strict";
exports.__esModule = true;
var bcrypt = require("bcrypt");
function bcryptPassword(password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    password = hash;
    return password;
}
exports.bcryptPassword = bcryptPassword;
;
