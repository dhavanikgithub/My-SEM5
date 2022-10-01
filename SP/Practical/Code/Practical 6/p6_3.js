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
            var myjs = fs.readFileSync('./p6_3_myjs.js');
            res.write('<html><head><script>'+myjs+'</script></head><body>'+
            '<table>'+
                '<form action="/" method="post">'+
                    '<tr>'+
                        '<td>Enter Name:</td>'+
                        '<td><input type="text" name="uname"/></td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>Enter Brand: </td>'+
                        '<td><input type="text" name="bname"/></td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>Enter Quantity: </td>'+
                        '<td><input type="text" name="quantity"/></td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td>Enter Price: </td>'+
                        '<td><input type="text" name="price"/></td>'+
                    '</tr>'+
                    '<tr>'+
                        '<td></td>'+
                        '<td><input type="submit" value="Insert"/></td>'+
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
                    var bname = d.bname;
                    var quan = d.quantity;
                    var p =d.price;
                    var sql = "INSERT INTO product (name, brand, quantity, price) values ('"+uname+"','"+bname+"','"+quan+"','"+p+"')"
                    con.query(sql,function(err){
                        if(err)
                        {
                            console.log(err.message);
                        }
                        else{
                            console.log("Record Inserted Successful");
                            res.end('<br><br><div id="info_message">Record Inserted Successful</div></body</html>');
                            
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
