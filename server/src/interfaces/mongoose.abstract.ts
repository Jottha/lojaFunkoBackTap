import { ErrorModel } from './../utils/error.model';
import { ExportableToSchema } from './schema.interface';
import { Document, Model, Schema } from 'mongoose';
import * as mongoose from 'mongoose';
import * as message from '../../environments/messages.const';



abstract class Mongooserepository<T extends ExportableToSchema> {

    protected nameSchema: string;
    protected schema: Schema;
    protected model: Model<Document>;

    constructor(schemaObject: T) {

        this.schema = new Schema(schemaObject.getSchema(), this.getConfigurationInSchema());
        this.nameSchema = Object.getPrototypeOf(schemaObject).constructor.name;
        this.model = mongoose.model(this.nameSchema, this.schema);

    }


    save(arg: T): Promise<T | ErrorModel>{
        return this.model.create(arg)
            .then((document: Document) => document.toJSON() as T)
            .catch(error => {
                throw new ErrorModel(message.MSG_ERROR_DEFAULT_TO_SAVE(this.nameSchema), error);
            });
    };

    remove(id: string): Promise<T | ErrorModel>{
        return this.model.findByIdAndRemove(id)
            .then((document: Document) => document.toJSON() as T)
            .catch(error => {
                throw new ErrorModel(message.MSG_ERROR_DEFAULT_TO_REMOVE(this.nameSchema), error);
            });
    };

    update(arg: T, id: string): Promise<T | ErrorModel> {
        return this.model.findByIdAndUpdate(id, arg, { new: true })
            .then((document: Document) => document.toJSON() as T)
            .catch(error => {
                throw new ErrorModel(message.MSG_ERROR_DEFAULT_TO_UPDATE(this.nameSchema), error);
            });
    };

    findAll(): Promise<Array<T> | ErrorModel> {
        return this.model.find()
            .then((document: Array<Document>) => document.map(document => document.toJSON() as T))
            .catch(error => {
                throw new ErrorModel(message.MSG_ERROR_DEFAULT_TO_FIND(this.nameSchema), error);
            });
    };

    findById(id: string): Promise<T | ErrorModel> {
        return this.model.findById(id)
            .then((document: Document) => (document.toJSON() as T))
            .catch(error => {
                throw new ErrorModel(message.MSG_ERROR_DEFAULT_TO_FIND(this.nameSchema), error);
            });
    };

    findAllByFilter(filter: any): Promise<Array<T> | ErrorModel> {
        return this.model.find(filter)
            .then((documents: Array<Document>) => documents.map(document => document.toJSON() as T))
            .catch(error => {
                throw new ErrorModel(message.MSG_ERROR_DEFAULT_TO_FIND(this.nameSchema), error);
            });
    };

    findByFilter(filter: any): Promise<T | ErrorModel> {
        return this.model.findOne(filter)
            .then((document: Document) => (document.toJSON() as T))
            .catch(error => {
                throw new ErrorModel(message.MSG_ERROR_DEFAULT_TO_FIND(this.nameSchema), error);
            });
    };

    private getConfigurationInSchema() {
        return {
            versionKey: false,
            timestamp: {createdAt:'created_at', updateAt: 'update_at'}
        };
    };
};

export default Mongooserepository;