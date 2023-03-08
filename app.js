const express=require('express');
const app= express();

const bodyParser=require('body-parser');

const loginRoute=require('./routes/login');
const msgRoute=require('./routes/message');

app.use(bodyParser.urlencoded({extended:false}));
app.use(loginRoute);
app.use(msgRoute);

app.listen(7000);
