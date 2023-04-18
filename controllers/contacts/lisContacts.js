const { boolean } = require("joi");
const Contact = require("../../models/contact"); // импорт модели

const listController = async (req, res, next) => {
//Пагинация
const {page = 1, limit = 10} = req.query; // тут хранятся параметры пагинации
console.log('QERY---->',req.query);
const { favorite } = req.query;
const skip = (page -1)* limit;
	console.log("REQ_Body", req.user);
	const {_id} = req.user; //контакты юзера с эти айди
  const contacts = await Contact.find({owner: _id, favorite: favorite}, "", {skip, limit: Number(limit)}).populate('owner', "_id name email");
  console.log("DATA2===>", contacts);
  res.json({
    status: "success",
    code: 200,
    data: {
      result: contacts,
    },
  });
};

module.exports = listController;
