import { Food } from "../models/Food.js";

export const addFoodController = async (req, res) => {
	const data = await Food(req.body);
	data.save();
	res.send({ message: "Upload successfully!" });
};
