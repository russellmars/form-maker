module.exports = async (ctx, next) => {
  const isProduction = process.env.NODE_ENV === 'production'
  try {
    await next()
  } catch (err) {
    console.log('err === ', err)
    ctx.status = 500;
    ctx.body = {
      code: 1,
      message: isProduction ? '服务器繁忙' : err.message
    }
  }
  if (ctx.status === 404 && /^\/api($|\/\.*)/.test(ctx.path)) {
    ctx.body = {
      code: 1,
      message: '无效的API请求'
    }
  }
  if (ctx.status === 405) {
    ctx.body = {
      code: 1,
      message: '不支持的请求类型'
    }
  }
}
