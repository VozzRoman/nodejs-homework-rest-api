//Отправка писька через СендГрид

const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const {SEND_GRID_API_KEY} = process.env;

sgMail.setApiKey(SEND_GRID_API_KEY);

const sendMail = async (data) => {
	const email = {...data, from:'voznukeroman@ukr.net'}
	try {
		await sgMail.send(email);
		return true;
	} catch (error) {
		throw error;
	}
}

module.exports = sendMail;

//Обьект письма

// const email = {
// 	to: 'davoda4457@lieboe.com',
// 	from: 'voznukeroman@ukr.net',
// 	subject: 'Новая заявка',
// 	html: '<p>С сайта пришла новая заявка</p>',
// }
// sgMail.send(email)
// .then(() => console.log('Email send success'))
// .catch(error => console.log(error.message));