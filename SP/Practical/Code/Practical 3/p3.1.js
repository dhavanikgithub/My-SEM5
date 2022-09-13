const http=require("http")
const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write("This is test")
    }
    else if(req.url==='/exam')
    {
        var out="<html> <body> <table border='1px'><tr><th>Semester</th><th>Subject</th></tr><tr><td>5th Sem</td><td>Software Packages</td></tr><tr><td>4th Sem</td><td>NOSQL</td></tr></table></body></html>"
        res.write(out);
    }
    else if(req.url==='/exam/regular_exam')
    {
        res.write("Regular exam");
    }

    res.end();
});
server.listen(6442,()=>{
    console.log("Connected Sucessful");
});