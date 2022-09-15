var fs = require('fs');
fs.writeFile('p4_06.txt','Hi',function(err)
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('File Created');
        fs.rename('p4_06.txt','p4_06_edited.txt',function(err)
        {
            if(err)
            {
                console.log(err);
            }
            else{
                console.log('File Renamed');
                console.log("Old Filename: p4_06.txt");
                console.log("Old Filename: p4_06_edited.txt");
            }
        });
    }
});