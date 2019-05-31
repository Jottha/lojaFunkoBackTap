import { ExportableToSchema } from '../../interfaces/schema.interface';


class ItemModel implements ExportableToSchema {

    _id: string;
    pefil: string;
    valor: number;
    descricao: string;

    getSchema(): any {
        return {
            perfil: {type: String, required: true},
            valor: {type: Number, required: true},
            descricao: {type: String, required: true}
        };
    };
};

export default ItemModel;