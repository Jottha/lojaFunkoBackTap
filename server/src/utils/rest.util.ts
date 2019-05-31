import { Application } from 'express';
import { Rest } from './../interfaces/rest.interface';
import { Route } from '../interfaces/route.interface';

class RestUtil {

    public createRoutes(app: Application, prefix: String, rest: Rest) {
        rest.routes.map(route => {
            this.createRoute(app, prefix, rest.urn, route);
        });
    };

    private createRoute(app: Application, prefix: String, urn: String, route: Route) {

        app.route(`/${prefix}/${urn}${route.path}`)[route.method](route.action);

        return app;
    };
};

export default new RestUtil();