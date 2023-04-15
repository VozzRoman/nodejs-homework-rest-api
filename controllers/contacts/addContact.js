
const Contact = require('../../models/contact');

const validateSchema = require("../../utils/schema");

const addController = async (req, res) => {
  const { error } = validateSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }
  const newContact = await Contact.create(req.body);
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newContact,
    },
  });
};

module.exports = addController;
