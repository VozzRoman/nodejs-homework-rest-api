
const mongoose = require('mongoose');

const app = require('./app');


const DB_HOTS ='mongodb+srv://Roman:rKBWkc4QPlDtBiWT@cluster0.jwv1esx.mongodb.net/contacts__reader?retryWrites=true&w=majority' 
mongoose.set('strictQuery', true);
mongoose.connect(DB_HOTS)
.then(() => {
	app.listen(3000)
})
.catch(error => {
	console.log(error.message);
	process.exit(1);
})




