const mongoose = require('mongoose');
const feedbackSchema = new mongoose.Schema({
  // 名称
  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Template'
  },
  // ip 地址
  ip: String,
  // 浏览器用户代理
  user_agent: String,
  // 列表内容
  list: [{
    title: {
      type: String,
      required: true,
      maxlength: 100
    },
    values: [String]
  }],
  // 创建时间
  create_at: { type: Date, default: Date.now, index: true },
  // 更新时间
  update_at: { type: Date, default: Date.now, index: true }
});

feedbackSchema.pre('findOneAndUpdate', function (next) {
  this.update_at = Date.now
  next()
})

module.exports = mongoose.model('Feedback', feedbackSchema);
