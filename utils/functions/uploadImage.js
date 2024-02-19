const uploadImage = async (req, res) => {
    try {
      const { file } = req;
      if (!file) {
        return res.status(400).json({ error: "No file uploaded." });
      }
      // تعریف آدرس URL مربوط به تصویر
      const imageUrl = `${process.env.HOST_URL}/public/uploads/users/${file.filename}`;
       file.imageUrl = imageUrl;
      res.status(200).json({ message: "File uploaded successfully", file });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  module.exports = { uploadImage };