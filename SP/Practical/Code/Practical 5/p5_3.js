const event = require('events');
const fs = require('fs');
const e = new event.EventEmitter();

e.once('event-read',(fname)=>{
    fs.readFile(fname,function(err,data){
        if(err)
        {
            console.log(err.message);
        }
        else{
            console.log("=====File Data is=====\n")
            console.log(data.toString()+"\n");
            e.emit('event-word-cal',data.toString());
        }
    });
});
e.once('event-word-cal',(data)=>{
    var str = data.replace('\r\n',' ').split(' ');
    console.log("No of word in file is: "+(str.length));
    console.log("Finish");
});
e.emit('event-read','./p5_3.txt');