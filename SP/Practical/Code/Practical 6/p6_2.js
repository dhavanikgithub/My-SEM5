var mysql = require('mysql');
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
