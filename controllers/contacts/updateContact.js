const createError = require("http-errors");
const Contact = require("../../models/contact");

const validateSchema = require("../../utils/schema");

const updateControllers = async (req, res) => {
  const { error } = validateSchema.validate(req.body);
  if (error) {
    error.status = 400;
    throw error;
  }
  const { id } = req.params;
  const contact = await Contact.findByIdAndUpdate(id, req.body, { new: true }); // без new: true мы не получим сразу обновленные данные в Постман
  if (!contact) {
    throw createError(404, `user with id=${id} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      contact,
    },
  });
};

module.exports = updateControllers;
