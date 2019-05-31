import ItemController from '../../controller/Sistema/itemController';
import { Rest } from '../../interfaces/rest.interface';
import { Route } from '../../interfaces/route.interface';

class ItemPublicoRest implements Rest {
    
    urn: string = 'Item';
    routes: Array<Route> = [
        {
            method: 'get', path: '/',
            action: ItemController.getAllItens
        },
        {
            method: 'get', path: '/:id',
            action: ItemController.getItemById
        }
    ];
};

export default new ItemPublicoRest();