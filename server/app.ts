import * as morgan from 'morgan';
import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import { createServer, Server } from 'http';
import * as Application from 'express';
import DatabaseConfiguration from './config/database.configuration';
import { RestModule } from './src/rests/rests';
import * as CorsConfiguration from '../server/config/cors.configutration';

export class App {
    
    public app: Application;
    private dataBase: DatabaseConfiguration = new DatabaseConfiguration();
    public server: Server;
    static server: any;
    
    constructor() {
        this.dataBase.createConnection();
        this.app = express();
        this.server = createServer(this.app);
        this.app.use(
            cors(CorsConfiguration),
            morgan("dev"),
            json(),
            urlencoded({ extended: false })
        );
        new RestModule(this.app);
    };

    closedataBaseConnection(message: string, callback: Function) {
        this.dataBase.closeConnection(message, () => callback());
    };
};