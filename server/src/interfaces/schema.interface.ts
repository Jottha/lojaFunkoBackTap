import { Identifiable } from "./Identifiable.interface";

export interface ExportableToSchema extends Identifiable {

    getSchema(): any;
};