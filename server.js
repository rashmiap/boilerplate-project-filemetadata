'use strict';
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const db = require('./app/config/mongodb.env.js');

var app = express();
let caseStudiesRouter = require('./app/routers/caseStudies.router.js');
let solutionsRouter = require('./app/routers/solutions.router.js');
let careersRouter = require('./app/routers/careers.router.js');

//connecting to mongodb
mongoose.connect(db.MONGO_DB_URI, { useNewUrlParser: true });

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));


app.use('/api/casestudies', caseStudiesRouter);
app.use('/api/solutions', solutionsRouter);
app.use('/api/career', careersRouter);

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
});
app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
