import { errorHandler } from './../../utils/error.handler';
import { ErrorModel } from './../../utils/error.model';
import { Response, Request } from 'express';
import itemService from '../../services/Sistema/itemService';
import ItemModel from '../../model/Sistema/itemModel';

class ItemController {

    getAllItens(req: Request, res: Response) {
        itemService.getAllItens()
            .then((itens: Array<ItemModel>) =>{
                res.send(itens).status(200);
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };

    getItemById(req: Request, res: Response) {
        itemService.getItemById(req.params.id)
            .then((item: ItemModel) => {
                res.send(item).status(200);
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };

    createItem(req: Request, res: Response) {
        itemService.createItem(req.body)
            .then((item: ItemModel) => {
                res.send(item).status(201);
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };

    updateItem(req: Request, res: Response) {
        itemService.updateItem(req.body, req.params.id)
            .then((item: ItemModel) => {
                res.send(item).status(200);
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };

    deleteItem(req: Request, res: Response) {
        itemService.deleteItemById(req.params.id)
            .then((item: ItemModel) => {
                res.send(item).status(200);
            }).catch((error: ErrorModel) => errorHandler(error, res));
    };
};

export default new ItemController();