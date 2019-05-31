import { ErrorModel } from './../../utils/error.model';
import ItemModel from "../../model/Sistema/itemModel";
import itemRepository from '../../repository/Sistema/itemRepository';


class ItemService {

    getAllItens(): Promise<Array<ItemModel> | ErrorModel> {
        return itemRepository.findAll();
    };

    getItemById(id: string): Promise<ItemModel | ErrorModel> {
        return itemRepository.findById(id);
    };

    createItem(item: ItemModel): Promise<ItemModel | ErrorModel> {
        return itemRepository.save(item);
    };

    updateItem(item: ItemModel, id: string): Promise<ItemModel | ErrorModel> {
        return itemRepository.update(item, id);
    };

    deleteItemById(id: string): Promise<ItemModel | ErrorModel> {
        return itemRepository.remove(id);
    };
    
};

export default new ItemService();