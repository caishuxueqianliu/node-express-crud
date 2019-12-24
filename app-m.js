// npm i -S express

// npm install -g express-generator
// express server

// npm install -g nodemon

// npm install --save art-template
// npm install --save express-art-template
var express=require('express')
var server=express()
var router=require('./router-m.js')
server.use('/node_modules/', express.static('./node_module/'))
server.use('/public/', express.static('./public/'))

server.engine('html', require('express-art-template'))

var bodyParser = require('body-parser')
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())


server.use(router)


module.exports = server;


server.listen(3000,()=>{
	console.log('sucess...')
})
