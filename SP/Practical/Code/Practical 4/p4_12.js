const path=require('path');
var path_link="H:/BACKUP/node/myexamples/CIRCLE.js";
console.log('Root: '+path.parse(path_link).root);
console.log('Dir: '+path.parse(path_link).dir);
console.log('BaseName: '+path.parse(path_link).base);
console.log('FileName: '+path.parse(path_link).name);
console.log('File Extension: '+path.parse(path_link).ext);