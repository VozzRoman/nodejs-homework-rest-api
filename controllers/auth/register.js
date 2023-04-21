const {Conflict} = require('http-errors');
const gravatar = require('gravatar');
const {userSchema}= require('../../utils/index');
const {v4} = require('uuid');
const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const sendMail = require('../../sendGrid/sendGrid');

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
 const avataruRL = gravatar.url(email);
 const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10)); // хеш пароля

const verificationToken = v4();

 const result = await User.create({name, email, password: hashPassword, subscription, avataruRL, verificationToken});
 console.log("RESULT---->", result)

const mail = {
	to: email,
	subject: 'Подтверждение email',
	html: `<a target="_blank" href="http://localhost:3000/api/users/verify/${verificationToken}">Подтверждение Email</a>`
}
await sendMail(mail);

 res.status(201).json({
	user: {
		email,
		subscription: result.subscription,
		avataruRL,
		verificationToken
	 }
 })
}


module.exports = register;