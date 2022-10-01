var mysql = require('mysql');
var http = require('http');
const qs = require('querystring');
const fs = require('fs');
http.createServer(function(req,res)
{
    var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'Node_test'
    });
    con.connect(function(err){
        if(err) 
        {
            throw err
        }
        else{
            var mycss = fs.readFileSync('./p6_4_mystyle.css');
            res.write('<html><body><head><style>'+mycss+'</style></head>'+
            '<table>'+
                '<form action="/" method="post">'+
                    '<tr>'+
                        '<td>Search By Name Or Brand:</td>'+
                        '<td><input type="text" name="uname"/></td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td></td>'+
                        '<td><input type="submit" value="Search"/></td>'+
                    '</tr>'+
                '</form>'+
            '</table>');
            if(req.method=='POST')
            {
                var sdata="";
                req.on('data',(chunk)=>{
                    sdata = sdata+chunk.toString();
                });
                req.on('end',()=>{
                    var d = qs.parse(sdata);
                    var uname = d.uname;
                    var sql = "SELECT * FROM product WHERE name='"+uname+"' or brand='"+uname+"'";
                    con.query(sql,function(err,results){
                        if(err)
                        {
                            console.log(err.message);
                        }
                        else{
                            res.write('<br><br><table><thead><tr><td>ID</td><td>Name</td><td>Brand</td><td>Quantity</td><td>Price</td></tr></thead><tbody>');
                            results.forEach(element => {
                                res.write('<tr>'+
                                '<td>'+element.id+'</td>'+
                                '<td>'+element.name+'</td>'+
                                '<td>'+element.brand+'</td>'+
                                '<td>'+element.quantity+'</td>'+
                                '<td>'+element.price+'</td>'+
                                '</tr>');
                                });
                            res.end('</tbody></table></body></html>');
                        }
                        con.end();
                    });
                });
            }
            else{
                res.end('</body></html>');
            }
        }
    });
}).listen(3000);
