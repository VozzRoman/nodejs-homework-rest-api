
const mongoose = require('mongoose');

const app = require('./app');

const {DB_HOTS} = require('./config');

mongoose.set('strictQuery', true);
mongoose.connect(DB_HOTS)
.then(() => {
	app.listen(3000)
})
.catch(error => {
	console.log(error.message);
	process.exit(1);
})




