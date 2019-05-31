import { Config } from './../environments/environments';
import { Connection } from "mongoose";
import * as mongoose from "mongoose";


class DatabaseConfiguration {

    private dbConnection: Connection;

    constructor() { }

    createConnection() {
        mongoose.connect(Config.PROFILE.DB_URI);
        this.logger();
    };

    logger() {
        this.dbConnection = mongoose.connection;
        this.dbConnection.on('connected', () => console.log(`DATABASE - mongose is connected in ${Config.PROFILE.DB_URI}`));
        this.dbConnection.on('error', error => console.log(`DATABASE - connection error: ${error}`));
        this.dbConnection.on('disconnected', () => console.log(`DATABASE - mongose is disconnected in ${Config.PROFILE.DB_URI}`));
    };

    closeConnection(message, callback) {
        this.dbConnection.close(() => {
            console.log(`DATABASE - mongoose was desconeted ${message}`);
        });

    };
};

export default DatabaseConfiguration;