import { ExportableToSchema } from './../../interfaces/schema.interface';


class PessoaModel implements ExportableToSchema {
      
    _id: string;
    name: string;
    cpf: string;


    getSchema() {
        return {
            name: { type: String, required: true, minlength: 5, masxlength: 20 },
            cpf: { type: String, required: true }
        };
    };

};

export default PessoaModel;