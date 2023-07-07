const mongoose = require('mongoose');


const registrationSchema = new mongoose.Schema({
  userName: String,
  phoneNo: String,
  email: String,
  password: String,
  confirmPassword: String,
  personalAddress: String,
  state: String,
  zipcode: String,
  companyName: String,
  companyContactNo: String,
  companyAddress: String,
  companyState: String,
  companyZipcode: String,
  gstn: String,
  businessLocation: String,
  businessCategory: String,
  businessType: String,
  businessDescription: String,
  image: String,
  video: String,
});

// Create a model based on the schema
module.exports = mongoose.model('Registration', registrationSchema);