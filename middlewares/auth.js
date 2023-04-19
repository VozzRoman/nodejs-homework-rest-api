//МидлВара для получения (цепляем токен к юзеру) токена
const {Unauthorized} = require('http-errors')
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const {SECRET_KEY} = process.env;
//hw-05


const auth = async(req, res, next) => {
const {authorization = ""} = req.headers;

const [bearer, token] = authorization.split(' ');
try {
	if(bearer !== 'Bearer' || !token) {
		throw new Unauthorized("No authorized");
	}
	const {id} = jwt.verify(token, SECRET_KEY);
	const user = await User.findById(id);
	if(!user || !user.token){
		throw new Unauthorized("No authorized");
	}
	req.user = user; //здесь обьект юзера (_id) который можно получить в контроллерах contacts
	next();
} catch (error) {
	if(error.message = "Invalid sugnature") {
		error.status = 401;
	}
	next();
}
}

module.exports = auth;