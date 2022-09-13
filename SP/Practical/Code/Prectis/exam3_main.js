var ele = require('./exam3');
var http = require('http')
ele.element.forEach(i=>{
    if(i.title=="7 habits of highly effective people")
    {
        http.createServer(function(req,res){
            res.end(i.title);
        }).listen(5000);
    }
});