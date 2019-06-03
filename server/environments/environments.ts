import { dev } from './enviroments.dev';
import { prod } from './environment.prod';

export const Config = {

    API_NAME: 'Livraria',
    VERSION: '0.0.1',
    VERSION_URL: 'v1',

    SECRET_KEY: 'livraria',
    TOKEN_PREF: 'Bearer',
    TOKEN_HEADER: 'Authorization',

    //PROFILE: dev,
    PROFILE: prod,
    PORT: 3000,
    HOST: 'localhost'
};