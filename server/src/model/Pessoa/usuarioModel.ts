import { ExportableToSchema } from '../../interfaces/schema.interface';

class UsuarioModel implements ExportableToSchema {

    _id: string;
    username: string;
    password: string;
    rule: "CLIENTE" | "ADMIN";
    idPeople: string;

    getSchema(): any {
        return {
            username: { type: String, required: true, unique: true, minlength: 5, maxlength: 20 },
            password: { type: String, required: true, minlength: 6, maxlength: 64 },
            rule: { type: String, enum: ["CLIENTE", "ADMIN"], required: true},
            idPeople: { type: String, require: true, unique: true }

        };
    };
};

export default UsuarioModel;