var fs = require('fs');
fs.readFile("p4_1.txt",function(err,data){
    if(err)
    {
        console.log(err);
    }
    else
    {
        var str = data.toString().split(' ');
        var num1 = parseInt(str[0]);
        var num2 = parseInt(str[1]);
        console.log("Addition is: "+(num1+num2))
        console.log("Subtraction is: "+(num1-num2))
        console.log("Multiplication is: "+(num1*num2))
        console.log("Division is: "+(num1/num2))
    }
});