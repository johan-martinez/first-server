var express = require('express');
var route=express.Router();
var products=[
    {id:0, name:"Manzana" , price:20.2},
    {id:1, name:"Pera" , price:30.2},
    {id:2, name:"Durazno" , price:25.75},
    {id:3, name:"Agucatae" , price:80.17}
];

route.get('/',(req,res)=>{
    res.send(products)
})

route.get('/:id',(req, res)=>{
    var result=products.filter(p => p.id==req.params.id)
    res.send(result)
})

route.post('/', (req, res) => {
    if (products.find(p => p.id == req.body.id)) {
        res.send('the id already exists');
    } else {
        products.push(req.body);
        res.send('successful insertion');
    }
})

module.exports = route;
