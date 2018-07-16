const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // 用户名，唯一，用于登陆
  username: {
    type: String,
    maxlength: 20,
    required: true
  },
  // 密码
  password: {
    type: String,
    maxlength: 20,
    required: true
  },
  email: {
    type: String,
    maxlength: 50,
    required: true
  },
  status: {
    type: String,
    enum: ['valid', 'invalid'],
    default: 'valid'
  }
})

module.exports = mongoose.model('User', userSchema)
