import { CorsOptions } from "cors";
import { Config } from './../environments/environments';

class CorsConfiguration implements CorsOptions {

    allowedHeaders: string[];
    credentials: boolean;
    methods: string[];
    origin: string;
    exposedHeaders: string[];

    constructor() {
        this.allowedHeaders = ["Origin", "X-Requested-With", "Content-Type", "Accept", "Acess-Control-Allow-Headers", Config.TOKEN_HEADER];
        this.credentials = true;
        this.methods = ["GET", "HEAD", "OPTIONS", "PUT", "PATCH", "POST", "DELETE"];
        this.origin = '*';
        this.exposedHeaders = ["Access-Control-Expose-Headers", Config.TOKEN_HEADER];
    };
};

export default new CorsConfiguration;