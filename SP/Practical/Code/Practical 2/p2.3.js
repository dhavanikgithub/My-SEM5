const products = [ 
    {
        name : "Pen",
        inventory : 10,
        unit_price : 15
    },
    {
        name : "Pencil",
        inventory : 10,
        unit_price : 5
    },
    {
        name : "Scale",
        inventory : 10,
        unit_price : 10
    }
]
function listProducts(pro)
{
    pro.forEach(element =>
    {
        console.log(element.name)
    });
}
console.log("Product list")
var pn = new listProducts(products)
function totalValue(pro)
{
    var total = 0
    pro.forEach(element =>
    {
        total += element.inventory * element.unit_price
    });
    return console.log("Total value : "+total)
}
var tv = new totalValue(products)