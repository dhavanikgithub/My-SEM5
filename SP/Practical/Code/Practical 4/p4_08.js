var fs = require('fs');
fs.writeFile('p4_08.txt','Hello',function(err){
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('*****File created*****');
        console.log(fs.readFileSync('p4_08.txt').toString()+"\n");
        fs.appendFile('p4_08.txt',"\r\nHi\r\nHow Are You\r\nKem Chho\r\n",function(err){
            if(err)
            {
                console.log(err)
            }
            else
            {
                console.log("*****File Appended*****");
                console.log(fs.readFileSync('p4_08.txt').toString());
            }
        });
    }
});