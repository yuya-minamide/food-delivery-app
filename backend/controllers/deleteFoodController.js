import { Food } from "../models/Food.js";

export const deleteFoodController = async (req, res) => {
	try {
		const foodId = req.params.id;
		const deletedFood = await Food.findByIdAndDelete(foodId);

		if (!deletedFood) {
			return res.status(404).json({ error: "Food not found" });
		}

		res.send({ message: "Food deleted successfully" });
	} catch (error) {
		console.error(err);
		res.status(500).json({ error: "Server error" });
	}
};
