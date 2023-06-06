import mongoose from "mongoose";

const { Schema, model } = mongoose;

const StoreSchema = new Schema({
	storeName: {
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

const Store = model("Store", StoreSchema);

export { Store };
