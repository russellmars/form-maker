const serve = require('koa-static');

module.exports = (options) => {
  const middleware = serve(options);
  return async (ctx, next) => {
    if (/^\/(|index\.html|favicon\.ico|static\/.*)$/.test(ctx.path)) {
      await middleware(ctx);
    } else {
      await next();
    }
  };
};
