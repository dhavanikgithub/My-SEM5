var fs = require('fs');
fs.readFile('p4_3.txt',function(err,data){
    if(err)
    {
        console.log(err);
    }
    else{
        var str = data.toString().split('|');
        str.forEach(str_val=>{
            console.log(str_val);
        });
    }
});