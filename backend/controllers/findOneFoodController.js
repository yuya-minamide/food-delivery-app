import { Food } from "../models/Food.js";

export const findOneFoodController = async (req, res) => {
	try {
		const foodId = req.params.id;
		const food = await Food.findById(foodId);

		if (!food) {
			return res.status(404).json({ error: "Food not found" });
		}

		res.json(food);
	} catch (error) {
		console.error(err);
		res.status(500).json({ error: "Server error" });
	}
};
