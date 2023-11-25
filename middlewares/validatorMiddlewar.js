const validateMiddelware = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      const messageError = error.details.map((detail) => detail.message);
      return res.status(400).json({ error: messageError });
    }

    req.validatedData = value;
    next();
  };
};

module.exports = validateMiddelware;