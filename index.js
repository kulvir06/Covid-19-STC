const express = require('express');
const app = express();

const data_india = require('./data_india.js');
const data_world = require('./data_world.js')

app.use('/india',data_india);
app.use('/world',data_world)

app.get("/",function(req,res){
    res.send("Welcome to Backend Functioning")
})

app.listen(3000||process.env.PORT,function(){
    console.log("Server running on port 3000!!");
    
})