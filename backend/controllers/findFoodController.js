import { Food } from "../models/Food.js";

export const findFoodController = async (req, res) => {
	try {
		const data = await Food.find({});
		res.send(JSON.stringify(data));
	} catch (error) {
		console.error("Error retrieving food data", error);
		res.status(500).json({ error: "Failed to retrieve food data." });
	}
};
