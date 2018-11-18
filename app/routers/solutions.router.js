let express = require('express');
const Solutions = require("../models/solutions");

let router = express.Router();

router.post('/', function(req, res) {
  const body = req.body;
  const solution = new Solutions({
    firstName: body.firstName,
    lastName: body.lastName,
    designation: body.designation,
    workEmail: body.workEmail,
    phoneNumber: body.phoneNumber,
    message: body.message
  });
  solution.save(function(err, result) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send(solution);
  });
});

module.exports = router;
