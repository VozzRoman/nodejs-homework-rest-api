
const {Unauthorized} = require('http-errors');
const User = require('../../models/user');
const {loginSchema} = require('../../utils/index');
const bcrypt = require("bcryptjs");

const jwt = require('jsonwebtoken');
const {SECRET_KEY} = process.env;
// const auth = require('../../middlewares/auth');

const login = async (req, res) => {
	const {error} = loginSchema.validate(req.body);
	if(error) {
		error.status = 400;
		throw error;
	}
const {email, password} = req.body;
const user = await User.findOne({email});
const passCompare = bcrypt.compareSync(password, user.password);
if(!user || !passCompare){
	throw new Unauthorized(`Email or password is wrong`);
}

const payload = {
	id: user._id
};
const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "1h"});

await User.findByIdAndUpdate(user._id, {token}); //записываем Токе в базу

res.json({
	status: 'success',
	code: 200,
	data: {
		token,
	}
})

}


module.exports = login;