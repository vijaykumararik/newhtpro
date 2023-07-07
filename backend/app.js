const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer');
const upload = multer();
const PORT = 4000;

// Configure MongoDB and Mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Scope', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Require the event model/schema
const Event = require('./models/event');

// Middleware
app.use(express.json());
app.use(cors()); // Cross-origin resource sharing

// Upload event endpoint
app.post('/upload', upload.array('images', 15), async (req, res) => {
  try {
    const { eventId, title, description } = req.body;
    const files = req.files;

    const images = files.map((file) => ({
      image: file.buffer,
    }));

    // Create a new event document
    const event = new Event({
      eventId,
      title,
      description,
      images,
    });

    // Save the event to the database
    await event.save();

    res.json({ message: 'Event uploaded successfully' });
  } catch (error) {
    console.error('Error during event upload:', error);
    res.status(500).json({ error: 'An error occurred during event upload' });
  }
});

app.get('/events', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    res.status(500).json({ error: 'An error occurred during event retrieval' });
  }
});


//registration form apis



app.listen(PORT, () => {
  console.log(`Listening on server ${PORT}`);
});