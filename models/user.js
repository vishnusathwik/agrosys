const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	gender: {
		type: String,
		enum: ["male", "female"]
	},
	address: String,
	phone: Number,
	joinedTime: {
		type: Date,
		default: Date.now
	},
	role: {
		type: String,
		enum: ["admin", "donor"],
		required: true
	}
});

const User = mongoose.model("users", userSchema);
module.exports = User;