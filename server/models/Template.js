const mongoose = require('mongoose');
const templateSchema = new mongoose.Schema({
  // 名称
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  // 描述
  description: {
    type: String,
    maxlength: 200,
    default: ''
  },
  // 列表内容
  list: [{
    title: {
      type: String,
      required: true,
      maxlength: 100
    },
    tip: {
      type: String,
      maxlength: 100
    },
    type: {
      type: String,
      enum: ['text', 'radio', 'checkbox', 'select'],
      default: 'text'
    },
    options: [String],
    other: Boolean
  }],
  // 创建时间
  create_at: { type: Date, default: Date.now, index: true },
  // 更新时间
  update_at: { type: Date, default: Date.now, index: true }
});

templateSchema.pre('findOneAndUpdate', function (next) {
  this.update_at = Date.now
  next()
})

module.exports = mongoose.model('Template', templateSchema);
