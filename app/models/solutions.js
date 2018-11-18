const mongoose = require("mongoose");
const customValidators  = require("../helpers/customValidators");

const solutionSchema = new mongoose.Schema({
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
    message: {
      required: "message is required",
      type: String,
    },
    companyName: {
      required: "company name is required",
      type: String
    }
}, { timestamps: true });

//statics
// Indexes


const Solutions = mongoose.model('Solutions', solutionSchema);
module.exports = Solutions;
