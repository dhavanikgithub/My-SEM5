var mysql = require('mysql');
var http = require('http');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Node_test'
});
con.connect(function(err){
    if(err)
    {
        console.log(err.message);
    }
    else{
        console.log("Connection Successful");
        http.createServer(function(req,res)
        {
            if(req.method=='POST')
            {
                var sdata="";
                req.on('data',(chunk)=>{
                    sdata = sdata+chunk.toString();
                });
            }
            else{
                res.write('<html>'+
                '<body>'+
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
                    '</table>'+
                '</body>'+
                '</html>');
            }
        }).listen(3000);
        var sql = "CREATE TABLE product (id int AUTO_INCREMENT PRIMARY KEY, name varchar(50), brand varchar(50), quantity int, price REAL)"
        con.query(sql,function(err)
        {
            if(err)
            {
                console.log(err.message)
            }
            else{
                console.log("'Product' Table Created successful");
            }
        });
        con.end();
    }
});
