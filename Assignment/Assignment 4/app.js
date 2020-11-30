const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',function(req,res){
       res.sendFile(__dirname+'/index.html')
})
    
app.post('/', function (req, res) {
    console.log(req.body.username)
    res.send("Your Name : "+req.body.username)
})

app.post('/userEmail', function (req, res) {
    console.log(req.body.useremail)
    res.send("Your Email : "+req.body.useremail)
})
    
app.listen(4000)
console.log('Express-Listening to Kartik 2 Form port 4000')