const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',function(req,res){
   res.sendFile(__dirname+'/app.html')
 })

app.post('/', function (req, res) {
  console.log(req.body.username
})

app.listen(4000)
console.log('Express-Listening to kartik port 4000')