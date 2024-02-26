// Import Mongoose
const mongoose = require('mongoose');
const Property = require('./Property');

// Define the Impartment schema
const RentalPropertySchema = new mongoose.Schema({
  rent:{
    type: Number,
    required: true,
  },
  
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },

}, { timestamps: true });

const RentalProperty = Property.discriminator('RentalProperty', RentalPropertySchema);

// Export the Impartment model
module.exports = RentalProperty;