const express=require('express');
const route=express.Router();
const fs=require('fs');
// const data=require('./routes/data');

route.get('/',(req,res,next)=>{
    console.log('inside / get page');
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            data='cannot find any chat';
        }
        res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" id="message" name="message" placeholder="message">
        <input type="hidden" id="username" name="username">
        <button type="submit">SEND</button>
        </form>`);
    });
    
});

route.post('/',(req,res,next)=>{
    console.log("inside / post page");

    console.log(`${req.body.username}:${req.body.message}`);

    fs.writeFile('username.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>{
        err ? console.log(err) : res.redirect('/');
    });
});

module.exports=route;