import { Food } from "../models/Food.js";

export const findFoodController = async (req, res) => {
	const data = await Food.find({});
	res.send(JSON.stringify(data));
};
