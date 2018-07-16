const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const path = require('path');

const mongodb = require('./core/mongodb');

const errorHandler = require('./middlewares/errorHandler');
const staticHandler = require('./middlewares/staticHandler');
const routerHandler = require('./middlewares/routerHandler')

const serverConfig = require('./config/server.json');

mongodb.initialize();

const app = new Koa();

app.use(staticHandler(path.join(__dirname, '../dist')));

app.use(bodyParser());

app.use(errorHandler);
app.use(routerHandler());

const { port, host } = serverConfig;
app.listen(port, host);

console.log(
  `Form Maker API Server listening on http://${host}:${port}${
    serverConfig.apiRoot
  }`
);
