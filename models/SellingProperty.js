// Import Mongoose
const mongoose = require("mongoose");
const Property = require("./Property");

// Define the Impartment schema
const SellingPropertySchema = new mongoose.Schema(
  {
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const SellingProperty = Property.discriminator(
  "SellingProperty",
  SellingPropertySchema
);

// Export the Impartment model
module.exports = SellingProperty;
