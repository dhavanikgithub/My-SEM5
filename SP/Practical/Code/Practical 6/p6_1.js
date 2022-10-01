var mysql = require('mysql');
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
});
con.connect(function(err){
    if(err)
    {
        console.log(err.message);
    }
    else{
        console.log("Connection Successful");
        con.query('CREATE DATABASE Node_test',function(err)
        {
            if(err)
            {
                console.log(err.message)
            }
            else{
                console.log("'Node_test' Database Created successful");
            }
        });
        con.end();
    }
});