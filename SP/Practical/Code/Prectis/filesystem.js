const http=require('http');
const ur = require('url');
const fs = require('fs')
http.createServer(function(req,res){
    var urldata = ur.parse(req.url,true);
    var fname = '.'+urldata.pathname;
    fs.readFile(fname,function(err,data){
        if(err)
        {
            res.writeHead(404, {'Content-Type': 'text/html'}); 
            return res.end("404 Not Found"); 
        }
        else
        {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(5000);
