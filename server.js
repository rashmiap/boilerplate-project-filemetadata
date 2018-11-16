'use strict';

var express = require('express');
var cors = require('cors');
var AWS = require('aws-sdk');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var multer  = require('multer');
var multerS3 = require('multer-s3')


var app = express();

//connecting to mongodb
mongoose.connect('mongodb://rashmiap:123456r@ds163103.mlab.com:63103/amygb-localdev-test', { useNewUrlParser: true });
//var s3 = new aws.S3();
app.use(bodyParser.json());

// aws.config.update({
//     secretAccessKey: `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq5lLs2nNomRNx2vxTHbo
// PVAyKMosm5GjpkZ4IuyLdjFQeedPl5E3wyF7PWkJQxH1DgebYS9/kXGmo0tOP+og
// aGwDTKv2nfraRc3YgoOgmoDopHyOf6aBHjXYPkJX99hGbU8x9lAR/usqro1h+ro5
// 0CHKAaC3gHcsL9MdJv/wQehUyeVSYv0WtgoPwdgjuATK2zQ0LKyQeNS/3sf7JGDp
// LuZ7QqlD/Gjo7rRLfGu1/3REi34E/NRzilDpDaeiFJISBtRtnUnWUYky8Bs677mS
// SotjYStqFaaQMHzkcSLekL7RFJ6slXS0JzHxiuZhf8GSoOUQK2649EqDIv3AnUxL
// nwIDAQAB`,
//     signatureVersion: 'v4',
//     accessKeyId: 'AKIAI6JDEEU3DYBSZUGQ',
//     region: 'us-east-2'
// });

const s3Config = new AWS.S3({
    accessKeyId: 'AKIAI6JDEEU3DYBSZUGQ',
    secretAccessKey: `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAq5lLs2nNomRNx2vxTHbo
PVAyKMosm5GjpkZ4IuyLdjFQeedPl5E3wyF7PWkJQxH1DgebYS9/kXGmo0tOP+og
aGwDTKv2nfraRc3YgoOgmoDopHyOf6aBHjXYPkJX99hGbU8x9lAR/usqro1h+ro5
0CHKAaC3gHcsL9MdJv/wQehUyeVSYv0WtgoPwdgjuATK2zQ0LKyQeNS/3sf7JGDp
LuZ7QqlD/Gjo7rRLfGu1/3REi34E/NRzilDpDaeiFJISBtRtnUnWUYky8Bs677mS
SotjYStqFaaQMHzkcSLekL7RFJ6slXS0JzHxiuZhf8GSoOUQK2649EqDIv3AnUxL
nwIDAQAB`,
    bucket: 'career-resume-dev'
});
var upload = multer({
    storage: multerS3({
        s3: s3Config,
        bucket: s3Config.bucket,
        key: function (req, file, cb) {
            console.log(file);
            cb(null, file.originalname); //use Date.now() for unique file keys
        }
    })
});
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post("/api/fileanalyse", upload.array('upl',1), (req, res) => {
  res.send("Uploaded!");
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
