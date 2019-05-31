import Mongooserepository from "../../interfaces/mongoose.abstract";
import ItemModel from "../../model/Sistema/itemModel";


class ItemRepository extends Mongooserepository<ItemModel> { };

export default new ItemRepository(new ItemModel);