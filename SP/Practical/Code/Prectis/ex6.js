var r = require('readline');
var r1 = r.createInterface(process.stdin,process.stdout);
r1.question("Enter Name: ",function(Myname){
    process.stdout.write(Myname)
    process.exit();
});