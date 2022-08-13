const express=require('express');
const { appendFile } = require('fs');
const { resolve } = require('path');
const  path=require('path')
const {people} =require('./db')
const  data=JSON.stringify(people)
const app=express()

app.get('/loggin',function(req,res){
    console.log('loggin page')
  res.sendFile (path.resolve(__dirname,'./index.html'))
  res.status(200)
});
app.get('./submit',function(req,res){
    const email=req.query.email
   const  password=req.query.pass
    
})
