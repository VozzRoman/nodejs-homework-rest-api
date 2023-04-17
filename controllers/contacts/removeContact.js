const createError = require("http-errors");

const Contact = require('../../models/contact');

const removeController = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const contact = await Contact.findByIdAndRemove(id);
  if (!contact) {
    throw createError(404, `user with id=${id} not found`);
  }
  res.status(200).json({
    message: "contact deleted",
    status: "success",
    code: 200,
    data: {
      result: contact,
    },
  });
};

module.exports = removeController;
