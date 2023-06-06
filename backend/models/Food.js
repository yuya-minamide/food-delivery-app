import mongoose from "mongoose";

const { Schema, model } = mongoose;

const FoodSchema = new Schema({
	restaurantname: String,
	name: String,
	category: String,
	price: String,
	image: String,
	description: String,
});

const Food = model("Food", FoodSchema);

export { Food };
