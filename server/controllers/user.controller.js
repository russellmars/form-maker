const User = require('../models/User')
const is = require('is_js')

exports.create = async function (ctx, next) {
  const { username, password, email } = ctx.request.body
  const existUser = await User.findOne({
    $or: [{
      username
    }, {
      email
    }]
  })
  if (existUser) {
    ctx.body = {
      code: 1,
      message: '用户名或email已存在'
    }
    return
  }
  if (!is.email(email)) {
    ctx.body = {
      code: 1,
      message: 'email格式不正确'
    }
    return
  }
  await User.create({
    username, password, email
  })
  ctx.body = {
    code: 0
  }
}
