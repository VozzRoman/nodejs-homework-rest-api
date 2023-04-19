const Contact = require("../../models/contact");

const validateSchema = require("../../utils/schema");

const addController = async (req, res) => {
	console.log(req.user);
	const { _id } = req.user;
	console.log("_ID", _id);
  const { error } = validateSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }
  const newContact = await Contact.create({...req.body, owner: _id});
  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result: newContact,
    },
  });
};

module.exports = addController;
