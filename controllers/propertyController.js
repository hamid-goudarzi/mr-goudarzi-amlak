const express = require("express");
const router = express.Router();
const Property = require("../models/Property"); // Assuming your model file is in the 'models' directory

const uploadImage = async (req, res) => {
  try {
    const { file } = req;
    if (!file) {
      return res.status(400).json({ error: "No file uploaded." });
    }
    // تعریف آدرس URL مربوط به تصویر
    const imageUrl = `${process.env.HOST_URL}/public/uploads/properties/${file.filename}`;
     file.imageUrl = imageUrl;
    res.status(200).json({ message: "File uploaded successfully", file });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

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
      startDate,
      endDate,
      image,
      imageUrl,
      street,
      city,
      province,
      postalCode,
      country,
    } = req.body.formData;

    console.log(street, city);
    // Create a new Property instance
    const newProperty = new Property({
      title,
      description,
      startDate,
      endDate,
      image,
      imageUrl,
      address: {
        street,
        city,
        province,
        postalCode,
        country,
      },
    });

    // Save the property to the database
    const savedProperty = await newProperty.save();

    res.status(201).json(savedProperty);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createProperty, getAllProperties, uploadImage };
