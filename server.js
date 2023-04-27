
const mongoose = require('mongoose');

const app = require('./app');

const {DB_HOTS} = process.env;

mongoose.set('strictQuery', true);
mongoose.connect(DB_HOTS)
.then(() => {
	app.listen(4000)
})
.catch(error => {
	console.log(error.message);
	process.exit(1);
})




