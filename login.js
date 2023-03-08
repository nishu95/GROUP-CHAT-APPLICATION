const express=require('express');
const route=express.Router();

route.get('/login',(req,res,next)=>{
    console.log('inside get login');
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/login" method="POST"><input id="username" "text" name="username"><br><button type="submit">Login</button></form>')
});

route.post('/login',(req,res,next)=>{
    console.log("inside login post");
    console.log(req.body);
    res.redirect('/');
});

module.exports=route;