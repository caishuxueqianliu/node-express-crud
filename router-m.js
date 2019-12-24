/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */

var fs = require('fs')
var Student = require('./student-m')

// Express 提供了一种更好的方式
// 专门用来包装路由的
var express = require('express')

// 1. 创建一个路由容器
var router = express.Router()

// 2. 把路由都挂载到 router 路由容器中



/*
 * 渲染学生列表页面
 */

 router.get('/', function (req, res) {


  Student.find(function (err, students) {
      
    if (err) {
      return res.status(500).send('Server error.')
    }
     res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(students)
 
  
    })
  })


router.get('/students', function (req, res) {
  Student.find(function (err, students) {
       res.setHeader("Access-Control-Allow-Origin", "*");
    if (err) {
      return res.status(500).send('Server error.')
    }
    // res.json(students)
    res.render('index-m.html', {
      fruits: [
        '苹果',
        '香蕉',
        '橘子'
      ],
      students: students
    })
  })
})

/*
 * 渲染添加学生页面
 */
router.get('/students/new', function (req, res) {
  res.render('new-m.html')
})

/*
 * 处理添加学生
 */
router.post('/students/new', function (req, res) {

  // console.log(req.body)
  new Student(req.body).save(function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})

/*
 * 渲染编辑学生页面
 */
router.get('/students/edit', function (req, res) {

 Student.findById(req.query.id.replace(/"/g, ''), function (err, student) {

    if (err) {
      // console.log(err)
      return res.status(500).send('Server error.')
    }
    res.render('edit-m.html', {
      student: student
    })
  })
})

// /*
//  * 处理编辑学生
//  */
router.post('/students/edit', function (req, res) {

  var id = req.body.id.replace(/"/g, '')
  Student.findByIdAndUpdate(id, req.body, function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})


//处理删除学生

router.get('/students/delete', function (req, res) {

  var id = req.query.id.replace(/"/g, '')
  Student.findByIdAndRemove(id, function (err) {
      // Student.deleteById(id, function (err) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    res.redirect('/students')
  })
})
router.get('*', function (req, res){
    console.log('404 handler..')
    res.render('404.html', {
        status: 404,
        title: 'NodeBlog',
    });
});
// 3. 把 router 导出
module.exports = router
