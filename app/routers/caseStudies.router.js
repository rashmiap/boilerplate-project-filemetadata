let express = require('express');
const CaseStudies = require("../models/casestudies");

let router = express.Router();

router.post('/', function(req, res) {
  const body = req.body;
  const studies = new CaseStudies({
    firstName: body.firstName,
    lastName: body.lastName,
    designation: body.designation,
    workEmail: body.workEmail,
    phoneNumber: body.phoneNumber,
    companyName: body.companyName
  });
  studies.save(function(err, result) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send(studies);
  });
});

module.exports = router;
