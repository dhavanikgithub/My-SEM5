var fs = require('fs');
fs.writeFile('p4_07.txt',"Hello",function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('File created');
        fs.unlink('p4_07.txt',function(err){
            if(err)
            {
                console.log(err);
            }
            else{
                console.log('File Deleted')
            }
        });
    }
});