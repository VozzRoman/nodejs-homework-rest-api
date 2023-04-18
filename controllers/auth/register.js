const {Conflict} = require('http-errors');
const {userSchema}= require('../../utils/index');
const User = require('../../models/user');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {

	const { error } = userSchema.validate(req.body);
	if(error) {
		error.status = 400;
		throw error;
	} 
	const {name, email, password, subscription} = req.body;
 	const user = await User.findOne({email});
 if(user) {
	throw new Conflict(`Email ${email} already in use`);
 }
 const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10)); // хеш пароля
 const result = await User.create({name, email, password: hashPassword, subscription});
 console.log("RESULT---->", result)
 res.status(201).json({
	user: {
		email,
		subscription: result.subscription,
	 }
 })
}


module.exports = register;