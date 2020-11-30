const express = require('express')
const app = express()
 // localhost:3000/
 //localhost:3000/hi
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/hello', function (req, res) {
    res.send('Hello')
  })

app.get('/bye', function (req, res) {
  res.send('Bye')
})
 
app.listen(4000)
console.log('Express-Listening to Kartik port 4000')