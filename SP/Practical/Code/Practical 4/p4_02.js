var fs = require('fs');
//Sync Read
console.log("*****Sync File Read*****");
console.log(fs.readFileSync('p4_01.txt').toString());
console.log("Read Complete\n");

//Async Read
console.log("*****Async File Read*****");
fs.readFile('p4_01.txt',function(err,data){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});
console.log("Read Complete");
