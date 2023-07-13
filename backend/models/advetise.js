const mongoose = require('mongoose');

const advertiseSchema = mongoose.Schema({
  advertise: {
    type: Buffer,
    required: true,
  },
});

module.exports = mongoose.model('Advertise', advertiseSchema);
