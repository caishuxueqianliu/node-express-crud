// npm i -S express

// npm install -g express-generator
// express server

// npm install -g nodemon

// npm install --save art-template
// npm install --save express-art-template
var express=require('express')
var server=express()
var router=require('./router.js')
server.use('/node_modules/', express.static('./node_module/'))
server.use('/public/', express.static('./public/'))

server.engine('html', require('express-art-template'))

var bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())


server.use(router)

// server.get('/a',(req,res)=>{
// 	res.render('inde.html',{
// 	title:title,
// 	students:[
// {"id":4,"name":"张三三","gender":"0","age":"22","hobbies":"吃饭、睡觉、打豆豆"},
// {"id":4,"name":"张三三","gender":"0","age":"22","hobbies":"吃饭、睡觉、打豆豆"},
// {"id":4,"name":"张三三","gender":"0","age":"22","hobbies":"吃饭、睡觉、打豆豆"},
// {"id":4,"name":"张三三","gender":"0","age":"22","hobbies":"吃饭、睡觉、打豆豆"},
// {"id":4,"name":"张三三","gender":"0","age":"22","hobbies":"吃饭、睡觉、打豆豆"},
// {"id":4,"name":"张三三","gender":"0","age":"22","hobbies":"吃饭、睡觉、打豆豆"}
// 	]
// })
// })



module.exports = server;


server.listen(3000,()=>{
	console.log('sucess...')
})
