import { Rest } from "../interfaces/rest.interface";
import { Route } from "../interfaces/route.interface";
import AuthAcessController from "../controller/auth-access.controller";


class AuthRest implements Rest {
    
    urn: string = 'auth'
    routes: Array<Route> = [
        {
            method: 'post', path: '/register',
            action: AuthAcessController.register
        },
        {
            method: 'post', path: '/logar',
            action: AuthAcessController.login
        }
    ]
}

export default new AuthRest;