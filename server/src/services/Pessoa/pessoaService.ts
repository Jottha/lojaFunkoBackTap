import pessoaRepository from "../../repository/Pessoa/pessoaRepository";
import PessoaModel from "../../model/Pessoa/pessoaModel";
import { ErrorModel } from "../../utils/error.model";


class PessoaService {
    
    getAllPessosas(): Promise<Array<PessoaModel> | ErrorModel> {
        return pessoaRepository.findAll();
    };

    getPessoaById(id: string): Promise <PessoaModel | ErrorModel> {
        return pessoaRepository.findById(id);
    };
    
    createPessoa(pesssoa: PessoaModel): Promise<PessoaModel | ErrorModel> {
        return pessoaRepository.save(pesssoa);
    };

    updatePessoa(pesssoa: PessoaModel, id: string): Promise<PessoaModel | ErrorModel> {
       return pessoaRepository.update(pesssoa, id);
    };

    deletePessoa(id: string): Promise<PessoaModel | ErrorModel> {
        return pessoaRepository.remove(id);
    };
}

export default new PessoaService();