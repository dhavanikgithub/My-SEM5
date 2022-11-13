var express = require('express');
var router1 = express.Router();
router1.get('/', function (req, res, next) { 
    res.send("This is get method of user");
}); 
router1.post('/create-details', function (req, res, next) { 
    res.send("This is post method of user");
}); 
router1.put('/update-details', function (req, res, next) { 
    res.send("This is put method of user");
});  
router1.delete('/delete-details', function (req, res, next) { 
    res.send("This is delete method of user");
});
exports.router1=router1