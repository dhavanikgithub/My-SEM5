var mysql = require('mysql');
var http = require('http');
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
            res.write('<html><head><style>'+mycss+'</style></head><body><table><thead><tr><td>ID</td><td>Name</td><td>Brand</td><td>Quantity</td><td>Price</td></tr></thead><tbody>');
            var sql = "SELECT * FROM product WHERE quantity<3";
            con.query(sql,function(err,results)
            {
                if(err)
                {
                    throw err;
                }
                else{
                    results.forEach(element => {
                        res.write('<tr>'+
                        '<td>'+element.id+'</td>'+
                        '<td>'+element.name+'</td>'+
                        '<td>'+element.brand+'</td>'+
                        '<td>'+element.quantity+'</td>'+
                        '<td>'+element.price+'</td>'+
                        '</tr>');
                        });
                }
                res.end('</tbody></table></body></html>');
                con.end();
            });
        }
    });
}).listen(3000);
