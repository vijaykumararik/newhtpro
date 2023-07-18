

const express = require('express');
const cors = require('cors');
const app = express();
const multer = require('multer');
const upload = multer();
const upload1 = multer();
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

// Require the event and registration models/schemas
const Event = require('./models/event');
const Registration = require('./models/registration');
const Advertise = require('./models/advetise');
const Image = require('./models/images');

// Middleware
app.use(express.json());
app.use(cors()); // Cross-origin resource sharing

// Upload event endpoint
// app.post('/upload', upload.array('images', 15), async (req, res) => {
//   try {
//     const { eventId, title, description } = req.body;
//     const files = req.files;

//     const images = files.map((file) => ({
//       image: file.buffer,
//     }));

//     // Create a new event document
//     const event = new Event({
//       eventId,
//       title,
//       description,
//       images,
//     });

//     // Save the event to the database
//     await event.save();

//     res.json({ message: 'Event uploaded successfully' });
//   } catch (error) {
//     console.error('Error during event upload:', error);
//     res.status(500).json({ error: 'An error occurred during event upload' });
//   }
// });

app.post('/upload1', upload.array('image', 3), async (req, res) => {
  try {
    const files = req.files;
    console.log(files);

    // Create an array to store the uploaded images
    const uploadedImages = [];

    // Iterate over the uploaded files
    for (let i = 0; i < files.length; i++) {
      const buffer = files[i].buffer;

      // Create a new image document
      const image = new Image({ image: buffer });

      // Save the image to the database
      const savedImage = await image.save();

      // Push the saved image to the array
      uploadedImages.push(savedImage);
    }

    res.json({ message: 'Images uploaded successfully', uploadedImages });
  } catch (error) {
    console.error('Error during image upload:', error);
    res.status(500).json({ error: 'An error occurred during image upload' });
  }
});

// Registration endpoint

app.post('/registration',upload.array('images', 15), async (req, res) => {
  try {
  
    const {
      userName,
      phoneNo,
      email,
      password,
      confirmPassword,
      personalAddress,
      state,
      country,
      zipcode,
      companyName,
      companyContactNo,
      companyAddress,
      companyState,
      companyCountry,
      companyCity,
      companyZipcode,
      gstn,
      businessLocation,
      headbranch,
      subbranch1,
      subbranch2,
      businessCategory,
      businessType,
      plan,
      businessDescription,
      video,
    } = req.body;
    const files = req.files;

    const images = files.map((file) => ({
      image: file.buffer,
    }));
   
  
    // Create a new registration document
    const registration = new Registration({
      userName,
      phoneNo,
      email,
      password,
      confirmPassword,
      personalAddress,
      state,
      country,
      zipcode,
      companyName,
      companyContactNo,
      companyAddress,
      companyState,
      companyCountry,
      companyCity,
      companyZipcode,
      gstn,
      businessLocation,
      headbranch,
      subbranch1,
      subbranch2,
      businessCategory,
      businessType,
      plan,
      businessDescription,
      images,
      video,
    });
    // if (req.files && req.files.length > 0) {
    //   req.files.forEach((file) => {
    //     registration.images.push({
    //       name: file.originalname,
    //       data: file.buffer.toString('base64'),
    //     });
    //   });
    // }

    // Save the registration to the database
    let registrations=await registration.save();

    res.json({ message: 'Registration successful',"details":registrations });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
});

app.get('/members', async (req,res)=>{
  try {
    const members = await Registration.find();
    res.json(members);

  } catch (error) {
    console.error('Error fetching members:', error);
    res.status(500).json({ error: 'An error occurred during event retrieval' });
  }
});


// app.get('/members/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     // Replace this URL with your actual data source endpoint
//     const response = await Registration.findById(id)
//     // axios.get(`http://localhost:4000/members/${id}`);
//     const { data } = response;

//     // Assuming the response is an object with member data
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
  
app.get('/members/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const member = await Registration.findById(id);

    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }

    res.json(member);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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

//images
app.get('/images', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'An error occurred during image retrieval' });
  }
});

  
app.delete('/images/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the image by ID
    const image = await Image.findById(id);

    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    // Delete the image from the database
    await image.remove();

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


//advatise apis
app.post('/advertise', upload.array('advertise', 3), async (req, res) => {
  try {
    const files = req.files;

    // Create an array to store the uploaded images
    const uploadedImages = [];

    // Iterate over the uploaded files
    for (let i = 0; i < files.length; i++) {
      const buffer = files[i].buffer;

      // Create a new image document
      const advertise = new Advertise({ advertise: buffer });

      // Save the image to the database
      const savedImage = await advertise.save();

      // Push the saved image to the array
      uploadedImages.push(savedImage);
    }

    res.json({ message: 'Images uploaded successfully', uploadedImages });
  } catch (error) {
    console.error('Error during image upload:', error);
    res.status(500).json({ error: 'An error occurred during image upload' });
  }
});

app.get('/advertises', async (req, res) => {
  try {
    const advertises = await Advertise.find();
    res.json(advertises);
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ error: 'An error occurred during image retrieval' });
  }
});

app.delete('/advertises/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the image by ID
    const advertise = await Advertise.findById(id);

    if (!advertise) {
      return res.status(404).json({ message: 'Image not found' });
    }

    // Delete the image from the database
    await advertise.remove();

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    res.status(500).json({ message: 'Server error' });
  }
});


app.listen(PORT, () => {
  console.log(`Listening on server ${PORT}`);
});





