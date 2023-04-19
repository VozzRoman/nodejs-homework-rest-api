const { Schema, model } = require("mongoose");

const userSchema = new Schema({
	name: {
		type: String,
		require: true,
	},

		password: {
		  type: String,
		  required: [true, 'Password is required'],
		},
		email: {
		  type: String,
		  required: [true, 'Email is required'],
		  unique: true,
		},
		subscription: {
		  type: String,
		  enum: ["starter", "pro", "business"],
		  default: "starter"
		},
		token: {
		  type: String,
		  default: null,
		},


 });

 const User = model("user", userSchema);

module.exports = User;