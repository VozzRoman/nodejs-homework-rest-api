
// const {listContacts } = require('../../models/contacts');

const Contact = require('../../models/contact'); // импорт модели

const listController = async (req, res, next) => {

		const contacts = await Contact.find({});
console.log("DATA2===>",contacts);
  res.json({
		status: 'success',
		code: 200,
		data: {
			result: contacts,
		}
  });
}



module.exports = listController;
