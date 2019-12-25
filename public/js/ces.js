//连接数据库
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
//mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
//设计文档结构（约束数据的完整性）
var Schema = mongoose.Schema
var userSchema = new Schema({
  username: {
    type: String,
    required: true // 必须有
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String
  }
})

//将文档结构发布为模型
var User = mongoose.model('User', userSchema)


//增加
var admin = new User({
   username: 'zs',
   password: '123456',
  email: 'admin@admin.com'
})

 // admin.save(function (err, ret) {
 //  if (err) {
 //    console.log('保存失败')
 //  } else {
 //     console.log('保存成功')
 //     //console.log(ret)
 //   }
 // })


//  查询

// User.find(function (err, ret) {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// User.find({
//   username: 'zs'
// }, function (err, ret) {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })

// User.findOne({
//   username: 'zs'
// }, function (err, ret) {
//   if (err) {
//     console.log('查询失败')
//   } else {
//     console.log(ret)
//   }
// })
//删除数据

// User.remove({
//   username: 'zs'
// }, function (err, ret) {
//   if (err) {
//     console.log('删除失败')
//   } else {
//     console.log('删除成功')
//     console.log(ret)
//   }

//更新数据
//**********************
User.findByIdAndUpdate('5a001b23d219eb00c8581184', {
  password: '123'
}, function (err, ret) {
  if (err) {
    console.log('更新失败')
  } else {
    console.log('更新成功')
  }
})