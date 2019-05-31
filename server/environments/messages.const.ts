/* API MESSAGES */
export const MSG_ERROR_DEFAULT_TO_FIND = (nameSchema) => `Ocorreu um erro ao buscar informações em ${nameSchema}`;
export const MSG_ERROR_DEFAULT_TO_SAVE = (nameSchema) => `Ocorreu um erro ao salvar a informação em ${nameSchema}`;
export const MSG_ERROR_DEFAULT_TO_UPDATE = (nameSchema) => `Ocorreu um erro ao atualizar a informação de ${nameSchema}, identificador não encontrado`;
export const MSG_ERROR_DEFAULT_TO_REMOVE = (nameSchema) => `Ocorreu um erro ao remover a informação de ${nameSchema}, identificador não encontrado`;

export const MSG_ERROR_TO_INVALID_TOKEN = `Você possui autorização para consumir este caminho devido a caveçalhos de autenticação inválidos`;

export const MSG_ERROR_TO_INVALID_FIELD = (fieldName, fieldRule) => `O valor do campo ${fieldName} deve atender a seguinte regra: ${fieldRule}`;

export const MSG_ERROR_MISSING_AUTHORIZATION_IN_HEADERS = `Você não possui autorização para consumir este caminho devido a ausência de cabeçalhos de autenticação`;

/* WEB MESSAGES */
export const MSG_ERROR_TO_WRONG_USERNAME_PASSAWORD = `Não foi possivel efetuar login, nome de acesso ou senha estão incorretas`;
export const MSG_ERROR_TO_USERNAME_ALREADY_IN_USE = `Não foi possivel efetuar registro, nome de acesso já em uso`;
export const MSG_ERROR_TO_CONTACT_TO_ADMIN = `Ocorreu um erro inesperado por favor tente novamente, caso o erro persistir entre em contato com o administrador do sistema`;