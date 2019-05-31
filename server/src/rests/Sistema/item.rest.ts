import ItemController from '../../controller/Sistema/itemController';
import { Rest } from './../../interfaces/rest.interface';
import { Route } from '../../interfaces/route.interface';

class ItemRest implements Rest {
    
    urn: string = 'acessorio';
    routes: Array<Route> = [
        {
            method: 'get', path: '/',
            action: ItemController.getAllItens
        },
        {
            method: 'get', path: '/:id',
            action: ItemController.getItemById
        },
        {
            method: 'post', path: '/',
            action: ItemController.createItem
        },
        {
            method: 'put', path: '/:id',
            action: ItemController.updateItem
        },
        {
            method: 'delete', path: '/:id',
            action: ItemController.deleteItem
        }
    ];
};

export default new ItemRest();