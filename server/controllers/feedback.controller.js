const Feedback = require('../models/Feedback')

exports.create = async function (ctx, next) {
  await Feedback.create(Object.assign({}, ctx.request.body, {
    ip: ctx.ip,
    user_agent: ctx.request.headers['user-agent']
  }))
  ctx.body = {
    code: 0
  }
}
