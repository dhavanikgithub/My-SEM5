var express = require('express');
var user = require('./user.js');
var order = require('./order.js');
var product = require('./product.js');
var category = require('./category.js');
var app = express();

app.use("/user",user.router1); 
app.use("/order",order.router1); 
app.use("/product",product.router1);
app.use("/category",category.router1);

app.listen(3000);