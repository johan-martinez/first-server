var express = require('express');
var route=express.Router();
var locations=[
    { name:"Tunja" ,        address:"Cr 5 #8-45, Las Nieves"},
    { name:"Chiquinquira" , address:"Cr 17 #14-12, Barrio"},
    { name:"Duitama" ,      address:"Cr 11 #10-27, El prado"},
    { name:"Sogamoso" ,     address:"Cr 7 #9-13, Castilla"}
];

route.get('/',(req,res)=>{
    res.send(locations)
})

route.get('/:name',(req, res)=>{
    var result=locations.filter(p => p.name.toLowerCase()==req.params.name.toLowerCase())
    res.send(result)
})

route.post('/', (req, res) => {
    if (locations.find(p => p.name.toLowerCase()==req.body.name.toLowerCase())) {
        res.send( `the location ${req.body.name} already exists`);
    } else {
        locations.push(req.body);
        res.send('successful insertion');
    }
})

module.exports = route;
