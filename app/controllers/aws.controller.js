var stream = require('stream');
const s3 = require('../config/s3.config.js');
const Careers = require("../models/Careers");

exports.doUpload = (req, res) => {
	const s3Client = s3.s3Client;
	const params = s3.uploadParams;

  params.Key = Date.now() + '-' + req.file.originalname;
  params.Body = req.file.buffer;
	const body = req.body;

	s3Client.upload(params, (err, data) => {
		if (err) {
			res.status(500).json({error: true});
		}
    const career = new Careers({
      firstName: body.firstName,
      designation: body.designation,
      workEmail: body.workEmail,
      phoneNumber: body.phoneNumber,
      yearsExperience: body.yearsExperience,
      monthsExperience: body.monthsExperience,
      keySkills: body.keySkills,
      resumeLink: data.Location
    });
    console.log(data ,'s3');
    career.save(function(err, result) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      res.send(career);
    });
	});
}
