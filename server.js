const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const MongoClient = require('mongodb').MongoClient
const uri = ""

MongoClient.connect(uri, (err, client)=>{
    //...start the server
})

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.listen(3000, function(){
    console.log('Server running on port 3000')
})

app.get('/', (req,res)=>{
    res.render('index.ejs')
})

app.post('/show', (req, res)=>{
    console.log(req.body)
})