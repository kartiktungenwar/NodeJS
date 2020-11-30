var express = require('express'); 
var app = express();

//for getting inputs in form field in html to app.js and saving in req.body
//for parsing data in inputs from urlencoded form to readable-string form
var bodyParser = require('body-parser')
//app.use() function makes it available for all the functions in the entire app.js file
app.use(bodyParser.urlencoded({extended: true}))

//Connection to Database
var mongoose = require('mongoose')

//one cluster can have multiple database.
//one database can have multiple collections.
//one collection can have multiple JSON objects

//using this connection url when u fill database name you connect to one database in that cluster

//syntax for connection to mongodb atlas
mongoose.connect('mongodb+srv://student:student123@cluster0-pg3g1.mongodb.net/companiresdata?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{console.log('Succesful')})
  .catch((err)=>{console.log('Unsuccesful '+err)})

//defining structure for the JSON objects in the collection in the database that you connected to using connection url
var compSchema = new mongoose.Schema({
    name : String,
    age: Number,
    dept: String
})

var compModel = mongoose.model('compCollection',compSchema)
//create company
app.post('/create', (req, res)=>{ 
    console.log(req.body)
    var compObject = new compModel()
    compObject.name = req.body.name
    compObject.age = req.body.age
    compObject.dept = req.body.dept
    compObject.save().then(()=>{
        res.send("company saved")
    })
})

//create company
app.post('/read', (req, res)=>{ 
    compModel.find
})

//By the following syntax the server starts listening to port 4000
app.listen(3000, function(){ 
    //If the server was successfully run and it started listening to port 4000
    //then the 'Listening to port 4000' will be printed in console/terminal
    console.log('Listening to port 3000') 
});