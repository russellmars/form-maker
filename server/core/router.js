const Router = require('koa-router');
const serverConfig = require('../config/server.json');
const router = new Router({ prefix: serverConfig.apiRoot });

const templateController = require('../controllers/template.controller')
const feedbackController = require('../controllers/feedback.controller')

router.get('/', (ctx, next) => {
  ctx.body = {
    message: 'hello world'
  };
});

router.post('/admin/template', templateController.create)

router.post('/admin/feedback', feedbackController.create)

module.exports = router;
