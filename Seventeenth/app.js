var express = require('express'); 
var app = express();

app.set('view engine', 'ejs');

var bodyParser = require('body-parser')
//use this when using postman
app.use(bodyParser.json())

//Connection to Database
var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://student:student123@cluster0-pg3g1.mongodb.net/studentdata?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{console.log('Succesful')})
  .catch((err)=>{console.log('Unsuccesful '+err)})

var studSchema = new mongoose.Schema({
    name : String,
    age: Number,
    dept: String
})

var studModel = mongoose.model('studCollection',studSchema)

//localhost:4000/ GET
//Fetching all students
//Read
app.get('/', (req, res)=>{ 
    studModel.find( {} , function(err,students){
        if(err)
            res.send(err)
        else
        {
            //console.log(students)
            res.render('home', {studs : students}); 
        }
    }) 
}); 

//localhost:4000/ POST
//Creating a student
//Create
app.post('/create',function(req,res){
    console.log(req.body)
    var studObject = new studModel()
    studObject.name = req.body.name
    studObject.age = req.body.age
    studObject.dept = req.body.dept
    studObject.save().then(()=>{
        studModel.find( {} , function(err,students){
            if(err)
                res.send(err)
            else
            {
                //console.log(students)
                res.render('home', {studs : students}); 
            }
        }) 
    })
})

//Query
//Get all students of certain age
app.get('/age/:ageNo',function(req,res){
    studModel.find( { age : req.params.ageNo} , function(err,students){
        if(err)
            res.send(err)
        else
        {
            //console.log(students)
            res.render('home', {studs : students}); 
        }
    }) 
})

app.listen(3000, function(){ 
    console.log('Listening to port 3000') 
})