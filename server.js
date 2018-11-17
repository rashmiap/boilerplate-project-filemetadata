'use strict';
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
let uploadRouter = require('./app/routers/upload.router.js');
let helloRouter = require('./app/routers/hello.router.js');

app.use('/', uploadRouter);
app.use('/', helloRouter);

//connecting to mongodb
mongoose.connect('mongodb://rashmiap:123456r@ds163103.mlab.com:63103/amygb-localdev-test', { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(cors());

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
