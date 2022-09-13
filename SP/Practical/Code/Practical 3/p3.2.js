const url1 = require('url');
const http = require('http');
http.createServer(function(req,res){
    var data1=url1.parse(req.url,true);
    var num1 = parseInt(data1.query.num1);
    var num2 = parseInt(data1.query.num2);
    if(num1 > num2)
    {
        res.end(num1+" is  greatest  number");
    }
    else if(num2 > num1)
    {
        res.end(num2+" is  greatest  number");
    }
    else
    {
        res.end(num1+" and "+num2+" are equal");
    }
}).listen(5214);