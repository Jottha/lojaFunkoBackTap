import PessoaModel from "../../model/Pessoa/pessoaModel";
import Mongooserepository from "../../interfaces/mongoose.abstract";


class PessoaRepository extends Mongooserepository<PessoaModel> { };

export default new PessoaRepository(new PessoaModel());