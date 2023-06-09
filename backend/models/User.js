import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
	nickName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const User = model("User", UserSchema);

export { User };
