import * as bcrypt from 'bcrypt';

export function bcryptPassword(password: string) {

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);
    password = hash;
    return password;
};