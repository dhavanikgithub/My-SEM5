var express = require('express');
var bap = require('body-parser');
var app = express();

var products=[
    {
        product_id:"123456789",
        product_name:"HP Pavilion Gaming Laptop 15",
        product_size:"15inch",
        product_brand:"HP",
        product_color:"Infrared"
    }
];

app.use(bap.urlencoded({extended:false}));
app.use(bap.json());

app.get("/",(req,res)=>{
    res.send(products);
});

app.post("/Add_Product/",(req,res)=>{
    var sdata = req.body;
    products.push(sdata);
    res.send(products);
});

app.put("/Edit_Product/:product_id",(req,res)=>{
    var old_product_id = req.params.product_id;
    var newdata = req.body;
    var index = products.findIndex((element) => element.product_id === old_product_id);
    if(index!=-1)
    {
        products[index].product_id=newdata.product_id;
        products[index].product_name=newdata.product_name;
        products[index].product_size=newdata.product_size;
        products[index].product_brand=newdata.product_brand;
        products[index].product_color=newdata.product_color;
    }
    res.send(products);
});

app.delete("/Delete_Product/:product_id",(req,res)=>{
    var old_product_id = req.params.product_id;
    products = products.filter(item => item.product_id !== old_product_id);
    res.send(products);
});

app.listen(3000);