const Router = require('koa-router');
const jwt = require('koa-jwt');
const serverConfig = require('../config/server.json');
const securityConfig = require('../config/security.json');

const templateController = require('../controllers/template.controller');
const feedbackController = require('../controllers/feedback.controller');
const userController = require('../controllers/user.controller');

const loginValidator = jwt({ secret: securityConfig.jwt.secret })
const router = new Router({ prefix: serverConfig.apiRoot });

router.get('/', (ctx, next) => {
  ctx.body = {
    message: 'hello world'
  };
});

router.post('/admin/template', loginValidator, templateController.create);

router.post('/admin/feedback', loginValidator, feedbackController.create);

router.post('/admin/user', userController.create);

module.exports = router;
