var mysql = require('mysql');
var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'Node_test'
    });
    var mystyle = fs.readFileSync('./p6_4_mystyle.css');
    res.write('<html><head><style>'+mystyle+'</style></head><body><table><thead><tr><td>ID</td><td>Name</td><td>Brand</td><td>Quantity</td><td>Price</td></tr></thead><tbody>');
    con.connect(function(err){
        if(err)
        {
            console.log(err.message);
        }
        else{
            var sql="SELECT * FROM product"
            con.query(sql,function(err,result){
                if(err)
                {
                    console.log(err.message)
                }
                else{
                    result.forEach(element => {
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
        }
    });
}).listen(3000);