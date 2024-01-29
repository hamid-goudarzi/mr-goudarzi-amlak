// Import Mongoose
const mongoose = require('mongoose');

// Define the Impartment schema
const Property = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  startDate: {
    type: Date,
    // required: true,
  },
  endDate: {
    type: Date,
    // required: true,
  },
  image: {
    type: String, // You can use String to store the URL of the image
    // required: true,
  },
  address: {
    street: {
      type: String,
    //   required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
    //   required: true,
    },
    postalCode: {
      type: String,
    //   required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  location: {
    type: {
      type: String,
      default: 'Point', // assuming you store coordinates as GeoJSON Point
    },
    coordinates: {
      type: [Number],
    //   required: true,
    },
  },
}, { timestamps: true });



// Export the Impartment model
module.exports = mongoose.model('Property', Property);
