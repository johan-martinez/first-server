var express = require('express')
var employeeRoute = require('./routes/employee')
var productRoute = require('./routes/products')
var locationRoute = require('./routes/locations')

var app = express();
var port = 9000;

app.use(express.json());

// services
app.use('/employees', employeeRoute);
app.use('/products',productRoute);
app.use('/locations',locationRoute);


app.listen(port, () => {
    console.log(`RUNNING ON PORT ${port}`)
});