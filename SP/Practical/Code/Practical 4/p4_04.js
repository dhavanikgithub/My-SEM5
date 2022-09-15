var fs = require('fs');
var str="<html>"+
"<head>"+
"<title>"+
"A Simple HTML Document"+
"</title>"+
"</head>"+
"<body>"+
"<p>This is a very simple HTML document</p>"+
"<p>It only has two paragraphs</p>"+
"</body>"+
"</html>";
fs.writeFile('p4_04.html',str,function(err){
    if(err)
    {
        console.log(err)
    }
    else{
        console.log("File Write Sucessful");
        console.log(fs.readFileSync('p4_04.html').toString());
    }
});