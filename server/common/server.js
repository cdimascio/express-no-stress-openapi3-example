import Express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as http from 'http';
import * as os from 'os';
import cookieParser from 'cookie-parser';
// 1. import express-middleware-openapi
import { OpenApiMiddleware } from 'express-middleware-openapi';
import l from './logger';

const app = new Express();

export default class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    const spec = path.join(__dirname, 'Api.yaml');
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json({ limit: process.env.REQUEST_LIMIT || '100kb' }));
    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: process.env.REQUEST_LIMIT || '100kb',
      })
    );
    app.use(cookieParser(process.env.SESSION_SECRET));
    app.use(Express.static(`${root}/public`));
    app.use(process.env.SWAGGER_API_SPEC, Express.static(spec));

    // 2. install the middleware
    // see https://github.com/cdimascio/express-middleware-openapi for
    // additional configuration options e.g. custom errors
    new OpenApiMiddleware({
      apiSpecPath: spec,
    }).install(app);
  }

  router(routes) {
    // 3. apply user defined routes to app
    routes(app);
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
          'development'} @: ${os.hostname()} on port: ${p}}`
      );
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
