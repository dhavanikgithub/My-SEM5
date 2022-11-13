const express = require('express'); 
const app = express(); 
app.use(Employ);
app.get('/', (req, res) => { 
    res.send("This is Home Page");
    console.log('This is Home Page');
});  
function Employ (req, res, next) {  
    console.log('This is Employ Middleware'); 
    next(); 
}
app.listen(3000);