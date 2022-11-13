var express = require('express');
var bap = require('body-parser');
var app = express();
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/"
const dbname = "ecom";

app.use(bap.urlencoded({extended:false}));
app.use(bap.json());

app.get("/",(req,res)=>{
    MongoClient.connect(url, (err1, db)=>{
        if(err1){
            throw err1;
        }
        else{
            var database = db.db(dbname);
            console.log("Database Successfully Connected!");
            database.collection('products').find({}).toArray(function(err2,data_result){
                if(err2)
                {
                    throw err2;
                }
                else{
                    res.send(data_result);
                    db.close();
                }
            });
        }
    });
});

app.post("/Add_Product/",(req,res1)=>{
    var sdata = req.body;
    MongoClient.connect(url, (err1, db)=>{
        if(err1){
            throw err1;
        }
        else{
            var database = db.db(dbname);
            console.log("Database Successfully Connected!");
            database.collection('products').insertMany(sdata,function(err2,res2){
                if(err2)
                {
                    throw err2;
                }
                else{
                    console.log(res2.insertedCount+" Data inserted");
                    database.collection('products').find({}).toArray(function(err3,res3){
                        if(err3)
                        {
                            throw err3;
                        }
                        else{
                            res1.send(res3);
                            db.close();
                        }
                    });
                }
            });
        }
    });
});

app.put("/Edit_Product/:product_id",(req,res1)=>{
    var old_product_id = {"product_id":req.params.product_id};
    var data = req.body;
    var newdata = {$set:data};
    MongoClient.connect(url, (err1, db)=>{
        if(err1){
            throw err1;
        }
        else{
            var database = db.db(dbname);
            console.log("Database Successfully Connected!");
            database.collection('products').updateOne(old_product_id,newdata,function(err2,res2){
                if(err2)
                {
                    throw err2;
                }
                else{
                    console.log(res2.modifiedCount+" Data Updated");
                    database.collection('products').find({}).toArray(function(err3,res3){
                        if(err3)
                        {
                            throw err3;
                        }
                        else{
                            res1.send(res3);
                            db.close();
                        }
                    });
                }
            });
        }
    });
});

app.delete("/Delete_Product/:product_id",(req,res1)=>{
    var old_product_id = {"product_id":req.params.product_id};
    MongoClient.connect(url, (err1, db)=>{
        if(err1){
            throw err1;
        }
        else{
            var database = db.db(dbname);
            console.log("Database Successfully Connected!");
            database.collection('products').deleteOne(old_product_id,function(err2,res2){
                if(err2)
                {
                    throw err2;
                }
                else{
                    console.log(res2.deletedCount+" Data Deleted");
                    database.collection('products').find({}).toArray(function(err3,res3){
                        if(err3)
                        {
                            throw err3;
                        }
                        else{
                            res1.send(res3);
                            db.close();
                        }
                    });
                }
            });
        }
    });
});

app.listen(3000);