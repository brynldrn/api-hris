var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = process.env.port || 8090;

// Schema
var Employee = require('./api/model/Employee');
var User = require('./api/model/User');
var Leave = require('./api/model/Leave');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/hris', {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    useMongoClient: true
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    if (req.method === "OPTIONS")
        res.sendStatus(200);
    else
        next();
});

var route_employee = require('./api/route/EmployeeRoute');
var route_user = require('./api/route/UserRoute');
var route_leave = require('./api/route/LeaveRoute');

route_employee(app);
route_user(app);
route_leave(app);

app.use(function (req, res, next) {
    res.status(404).send({ url: req.originalUrl + ' not found.' });
    res.status(403).send({ url: req.originalUrl + ' access FORBIDDEN.' });
    res.status(500).send({ url: req.originalUrl + ' - Internal Server Error.' });
    res.status(400).send({ url: req.originalUrl + ' - bad request.' });
});

app.listen(port);

console.log('HRIS API server started on: ' + port);