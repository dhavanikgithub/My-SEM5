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
            var myjs = fs.readFileSync('./p6_3_myjs.js');
            res.write('<html><head><script>'+myjs+'</script><style>'+mycss+'</style></head><body><table><thead><tr><td>ID</td><td>Name</td><td>Brand</td><td>Quantity</td><td>Price</td><td>Operation</td></tr></thead><tbody>');
            if(req.method=='POST')
            {
                var sdata="";
                req.on('data',(chunk)=>{
                    sdata = sdata+chunk.toString();
                });
                req.on('end',()=>{
                    var d = qs.parse(sdata);
                    var id = d.id;
                    var sql = "DELETE FROM product WHERE id='"+id+"'";
                    con.query(sql,function(err){
                        if(err)
                        {
                            console.log(err.message);
                        }
                        else{
                            var sql1 = "SELECT * FROM product";
                            con.query(sql1,function(err,results)
                            {
                                if(err)
                                {
                                    throw err;
                                }
                                else{
                                    results.forEach(element => {
                                        res.write('<tr>'+
                                        '<form action="/" method="post">'+
                                        '<td>'+element.id+'<input type="hidden" value="'+element.id+'" name="id"/></td>'+
                                        '<td>'+element.name+'</td>'+
                                        '<td>'+element.brand+'</td>'+
                                        '<td>'+element.quantity+'</td>'+
                                        '<td>'+element.price+'</td>'+
                                        '<td><input type="submit" value="Delete">'+
                                        '</form>'+
                                        '</tr>');
                                        });
                                    res.end('</tbody></table><div id="info_message">Record DELETED Successful</div></body></html>');
                                }
                            });
                            
                        }
                        con.end();
                    });
                });
            }
            else{
                var sql = "SELECT * FROM product";
                con.query(sql,function(err,results)
                {
                    if(err)
                    {
                        throw err;
                    }
                    else{
                        results.forEach(element => {
                            res.write('<tr>'+
                            '<form action="/" method="post">'+
                            '<td>'+element.id+'<input type="hidden" value="'+element.id+'" name="id"/></td>'+
                            '<td>'+element.name+'</td>'+
                            '<td>'+element.brand+'</td>'+
                            '<td>'+element.quantity+'</td>'+
                            '<td>'+element.price+'</td>'+
                            '<td><input type="submit" value="Delete">'+
                            '</form>'+
                            '</tr>');
                            });
                    }
                    res.end('</tbody></table></body></html>');
                    con.end();
                });
            }
        }
    });
}).listen(3000);
