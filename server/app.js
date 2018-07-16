const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const path = require('path');

const mongodb = require('./core/mongodb');
const router = require('./core/router');

const errorHandler = require('./middlewares/errorHandler');

const serverConfig = require('./config/server.json');

mongodb.initialize();

const app = new Koa();

app.use(serve(path.join(__dirname, '../dist')));

app.use(bodyParser());

app.use(errorHandler);

app.use(router.routes());
app.use(router.allowedMethods());

const { port, host } = serverConfig;
app.listen(port, host);

console.log(
  `Form Maker API Server listening on http://${host}:${port}${
    serverConfig.apiRoot
  }`
);
