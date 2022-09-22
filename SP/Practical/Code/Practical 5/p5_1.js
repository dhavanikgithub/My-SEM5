const event = require('events');
const e = new event.EventEmitter();
e.on('clicked',function(){
    const date = new Date()
    var hour = date.getHours();
    var min = date.getMinutes();
    console.log("Today Date is: "+date.getDate()+"-"+(parseInt(date.getMonth())+1)+"-"+date.getFullYear());
    if(hour >= 12)
    {
        console.log("Current Time: "+(hour%12)+":"+min+":"+date.getSeconds()+" PM");
    }
    else{
        console.log("Current Time: "+(hour%12)+":"+min+":"+date.getSeconds()+" AM");
    }
    if(hour>=6 && hour<=11 && min>=0 && min<=59)
    {
        console.log("Good Morning");
    }
    else if(hour>=12 && hour<=15 && min>=0 && min<=59)
    {
        console.log("Good Afternoon");
    }
    else if(hour>=16 && hour<=19 && min>=0 && min<=59)
    {
        console.log("Good Evening");
    }
    else
    {
        console.log("Good Night");
    }
});
e.emit('clicked');