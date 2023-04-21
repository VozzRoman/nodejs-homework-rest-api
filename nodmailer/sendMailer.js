const nodmailer = require('nodemailer');
require('dotenv').config();

const {META_PASSWORD} = process.env;

const nodmailerConfig = {
	host: "smtp.meta.ua",
	port: 465,
	secure: true,
	auth: {
		user: "looper0500@meta.ua",
		pass: META_PASSWORD,
	}
}


const transporter = nodmailer.createTransport(nodmailerConfig);

const email = {
	to: "looper0500@ukr.net",
	from: "looper0500@meta.ua",
	subject: "Новая заявка",
	html: "<p>С Сайта пришла новая заявка</p>"
};
transporter.sendMail(email)
.then(() => console.log("Email send success"))
.catch(error => console.log(error.message))

