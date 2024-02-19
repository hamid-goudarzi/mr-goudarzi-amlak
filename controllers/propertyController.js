const Property = require("../models/Property"); // Assuming your model file is in the 'models' directory
const RentalProperty = require("../models/RentalProperty");
const SellingProperty = require("../models/SellingProperty");

const getAllProperties = async (req, res) => {
  try {
    const allProperties = await Property.find();

    res.status(200).json(allProperties);
    console.log(allProperties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new property
const createProperty = async (req, res) => {
  try {

    // Assuming you're sending the property data in the request body
    const {
      title,
      description,
      image,
      imageUrl,
      street,
      city,
      province,
      postalCode,
      country,
      area,
      type,
      startDate,
      endDate,
      rent,
      price,
      
    } = req.body;

    let newProperty;
    if (type === 'rental') {
       newProperty = new RentalProperty({
        title,
        description,
        image,
        imageUrl,
        address: {
          street,
          city,
          province,
          postalCode,
          country,
        },
        type,
        area,
        startDate,
        endDate,
        rent,
      });
    }
    
    if (type === 'selling') {
      newProperty = new SellingProperty({
       title,
       description,
       image,
       imageUrl,
       address: {
         street,
         city,
         province,
         postalCode,
         country,
       },
       type,
       area,
       price,
     });
   }

    // Save the property to the database
    const savedProperty = await newProperty.save();

    res.status(201).json(savedProperty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createProperty, getAllProperties };
