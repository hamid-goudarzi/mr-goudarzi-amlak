const express = require('express');
const router = express.Router();
const Property = require('../models/Property'); // Assuming your model file is in the 'models' directory

const getAllProperties =async (req, res) => {
    try {
         const allProperties = await Property.find();
    
        res.status(200).json(allProperties);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
// Create a new property
const createProperty =async (req, res) => {
  try {
    // Assuming you're sending the property data in the request body
    const {
      title,
      description,
      startDate,
      endDate,
      image,
      address,
      location,
    } = req.body;

    console.log(req.body);
    // Create a new Property instance
    const newProperty = new Property({
      title,
      description,
      startDate,
      endDate,
      image,
      address,
      location,
    });

    // Save the property to the database
    const savedProperty = await newProperty.save();

    res.status(201).json(savedProperty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {createProperty, getAllProperties};
