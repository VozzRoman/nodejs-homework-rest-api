const Contact = require('../../models/contact');
const createError = require("http-errors");
const validateSchema = require('../../utils/favorSchema');

const updateStatusControllers = async (req, res) => {
	console.log('Body===>',req.body);
  
    const { error } = validateSchema.validate(req.body);
    if (error) {
      error.status = 400;
		error.message = "missing field favorite";
      throw error;
    }
    const { id } = req.params;
	 console.log("ID---->", req.params);
	 const {favorite} = req.body;
	 console.log("FAVORITE", req.body);
    const contact = await Contact.findByIdAndUpdate(id, {favorite}, {new: true}); // без new: true мы не получим сразу обновленные данные в Постман
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
  }

module.exports = updateStatusControllers;