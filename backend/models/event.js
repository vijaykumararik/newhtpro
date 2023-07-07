const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  image: {
    type: Buffer,
    required: true,
  },
});

const eventSchema = mongoose.Schema({
  eventId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [imageSchema],
});

module.exports = mongoose.model('Event', eventSchema);
