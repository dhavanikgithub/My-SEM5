var fs = require('fs');
fs.writeFile('empty.txt','',function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File Created");
    }
});