import { AuthenticationFilterConfiguration } from './../security/auth-filter.configuration';
import { Application } from 'express';
import { Rest } from '../interfaces/rest.interface';
import restUtil  from '../utils/rest.util';
import { Config } from '../../environments/environments';
import DefaultRest from './default.rest';
import AuthRest from '../rests/auth-access.rest';
import UsuarioRest from '../rests/Pessoa/usuario.rest';
import AcessorioRest from '../rests/Sistema/acessorio.rest';
import AcessorioPublicaRest from './Sistema/acessorio.publica.rest';
import ItemRest from './Sistema/item.rest';


export class RestModule {

    privateRoutes: Array<Rest> = [
        UsuarioRest,
        AcessorioRest,
        ItemRest
    ];

    publicRoutes: Array<Rest> = [
        DefaultRest,
        AuthRest,
        
        AcessorioPublicaRest,
        ItemRest
        
    ];

    constructor (app: Application) {
        
        this.publicRoutes.map(rest => {
            restUtil.createRoutes(app, `${Config.VERSION_URL}/web/public`, rest);
        });

        this.privateRoutes.map(rest => {
            new AuthenticationFilterConfiguration(app)
            restUtil.createRoutes(app, `${Config.VERSION_URL}/web/private`, rest);
        });
    };
};