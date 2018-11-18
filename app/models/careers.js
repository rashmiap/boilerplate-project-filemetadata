const mongoose = require("mongoose");
const customValidators  = require("../helpers/customValidators");

const careerSchema = new mongoose.Schema({
    firstName: {
      required: "first name is required",
      type: String,
    },
    designation: {
      required: "designation is required",
      type: String,
    },
    yearsExperience: {
      required: "experience (years) is required",
      type: Number,
    },
    monthsExperience: {
      required: "experience (months) is required",
      type: Number,
    },
    workEmail: {
      required: "work email is required",
      type: String,
      validate: {
          validator: customValidators.validateEmail,
          message: 'Not a valid email'
      }
    },
    phoneNumber: {
      required: "phone number is required",
      type: Number,
    },
    keySkills: {
      required: "key skills is required",
      type: String,
    },
    resumeLink: {
      required: "resume link uploaded is required",
      type: String
    }
}, { timestamps: true });

//statics
// Indexes

const Careers = mongoose.model('Careers', careerSchema);
module.exports = Careers;
