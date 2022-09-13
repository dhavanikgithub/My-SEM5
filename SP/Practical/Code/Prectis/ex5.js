console.log("Enter Name: ");
process.stdin.on('data',(mydata)=>{
    console.log("Entered data: "+mydata);
    process.exit();
});