const Template = require('../models/Template')

exports.create = async function (ctx, next) {
  console.log('request body === ', ctx.request.body)
  await Template.create(ctx.request.body)
  ctx.body = {
    code: 0
  }
}
