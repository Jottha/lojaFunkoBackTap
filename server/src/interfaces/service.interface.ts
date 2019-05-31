import { ErrorModel } from './../utils/error.model';

export interface IService<T> {
    
    add(arg: T): Promise<T | ErrorModel>;

    put(arg: T,id: string): Promise<T | ErrorModel>;

    getAll(): Promise<Array<T> | ErrorModel>;

    getById(): Promise<T | ErrorModel>;

    find(arg: any): Promise<T | ErrorModel>;
};