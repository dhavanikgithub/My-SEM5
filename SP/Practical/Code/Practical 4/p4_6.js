var fs = require('fs');
fs.writeFile('p4_6.txt','Hi',function(err)
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log('File Created');
        fs.rename('p4_6.txt','p4_6_edited.txt',function(err)
        {
            if(err)
            {
                console.log(err);
            }
            else{
                console.log('File Renamed');
                console.log("Old Filename: p4_6.txt");
                console.log("Old Filename: p4_6_edited.txt");
            }
        });
    }
});