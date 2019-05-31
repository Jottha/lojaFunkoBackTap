import { Route } from './../interfaces/route.interface';
import { Rest } from './../interfaces/rest.interface';
import DefaultController from '../controller/default.rest';


class DefaultRest implements Rest {

    urn: string = '';

    routes: Array<Route> = [
        {
            method: 'get',
            path: '',
            action: DefaultController.getDefaultResponse
        }
    ];
};

export default new DefaultRest;