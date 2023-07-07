


const registrationSchema = new mongoose.Schema({
  personName: String,
  personNumber: String,
  email: String,
  personAddress: String,
  companyName: String,
  companyContactNo: String,
  companyAddress: String,
  gstn: String,
  businessLocation: String,
  businessType: String,
  businessDescription: String,
  imageFile: String,
  videoFile: String,
});

const Registration = mongoose.model('Registration', registrationSchema);


