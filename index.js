var express = require('express')
var employeeRoute = require('./routes/employee')


var app = express();
var port = 9000;

app.use(express.json());

// services
app.use('/employees', employeeRoute);



app.listen(port, () => {
    console.log(`RUNNING ON PORT ${port}`)
});