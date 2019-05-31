import { Request, Response } from 'express';
import { Config } from './../../environments/environments';


class DefaultController {

    constructor() { };

    getDefaultResponse(req: Request, res: Response) {
        res.send(`<br>${Config.API_NAME} - VERSION: ${Config.VERSION} - PROFILE: ${Config.PROFILE.NAME} <>`);
    };
};

export default new DefaultController;