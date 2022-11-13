var express = require('express');
var router1 = express.Router();
router1.get('/', function (req, res, next) { 
    res.send("This is get method of product");
}); 
router1.post('/create-details', function (req, res, next) { 
    res.send("This is post method of product");
}); 
router1.put('/update-details', function (req, res, next) { 
    res.send("This is put method of product");
});  
router1.delete('/delete-details', function (req, res, next) { 
    res.send("This is delete method of product");
});
exports.router1=router1;