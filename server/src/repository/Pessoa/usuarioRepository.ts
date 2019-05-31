import Mongooserepository from '../../interfaces/mongoose.abstract';
import UsuarioModel from '../../model/Pessoa/usuarioModel';

class UsuarioRepository extends Mongooserepository<UsuarioModel> { };

export default new UsuarioRepository(new UsuarioModel());