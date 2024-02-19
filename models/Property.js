// Import Mongoose
const mongoose = require('mongoose');

// Define the Impartment schema
const PropertySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    // required: true,
  },
  image: {
    type: String, // You can use String to store the URL of the image
    // required: true,
  },
  imageUrl: {
    type: String,
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
  area: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['rental', 'selling'],
    required: true,
  },
}, { timestamps: true });

PropertySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();

    delete returnedObject._id;
    delete returnedObject.__v;
  },
} )

// Export the Impartment model
module.exports = mongoose.model('Property', PropertySchema);
