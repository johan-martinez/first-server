var express = require('express');

var route = express.Router();

var listEmployees = [
    { id: 10, name: 'Pepe Perez', city: 'Tunja' },
    { id: 20, name: 'Andrea Sanchez', city: 'Bogotá' },
    { id: 30, name: 'Sebastián Rojas', city: 'Bogota' }
];


route.get('/', (req, res) => {
    res.send(listEmployees);
});

route.get('/:id', (req, res) => {
    var result = listEmployees.filter(x => x.id == req.params.id);
    res.send(result);
});

route.post('/', (req, res) => {
    if (listEmployees.find(value => value.id == req.body.id)) {
        res.send('the id already exists');
    } else {
        listEmployees.push(req.body);
        res.send('successful insertion');
    }
});

module.exports = route;