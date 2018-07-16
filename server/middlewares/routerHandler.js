const router = require('../core/router');
const compose = require('koa-compose');
const jwt = require('koa-jwt');
const securityConfig = require('../config/security.json');
// 暂时无用
module.exports = () => {
  const middleware = compose([
    jwt({ secret: securityConfig.jwt.secret }),
    router.routes(),
    router.allowedMethods()
  ])
  return async (ctx, next) => {
    if (/^\/api\/.*$/.test(ctx.path)) {
      await middleware(ctx, next);
    } else {
      await next();
    }
  };
};
