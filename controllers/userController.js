const User = require("../models/User"); // Assuming your model file is in the 'models' directory

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();

    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new user
// const createUser = async (req, res) => {
//   try {

//     // Assuming you're sending the user data in the request body
//     const {
//       title,
//       description,
//       startDate,
//       endDate,
//       image,
//       imageUrl,
//       street,
//       city,
//       province,
//       postalCode,
//       country,
//     } = req.body;

//     // Create a new User instance
//     const newUser = new User({
//       title,
//       description,
//       startDate,
//       endDate,
//       image,
//       imageUrl,
//       address: {
//         street,
//         city,
//         province,
//         postalCode,
//         country,
//       },
//     });

//     // Save the user to the database
//     const savedUser = await newUser.save();

//     res.status(201).json(savedUser);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

module.exports = {
    //  createUser,
     getAllUsers };
