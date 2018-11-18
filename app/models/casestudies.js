const mongoose = require("mongoose");
const customValidators  = require("../helpers/customValidators");

const caseStudiesSchema = new mongoose.Schema({
    firstName: {
      required: "first name is required",
      type: String,
    },
    lastName: {
      required: "last name is required",
      type: String,
    },
    designation: {
      required: "designation is required",
      type: String,
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
    companyName: {
      required: "company name is required",
      type: String,
    }
}, { timestamps: true });

//statics


// Indexes
//caseStudiesSchema.index({workEmail: 1});

const CaseStudies = mongoose.model('CaseStudies', caseStudiesSchema);
module.exports = CaseStudies;
