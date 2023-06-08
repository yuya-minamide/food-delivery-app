import mongoose from "mongoose";

const { Schema, model } = mongoose;

const FoodSchema = new Schema({
	restaurantname: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	storeid: {
		type: String,
	},
});

const Food = model("Food", FoodSchema);

export { Food };
