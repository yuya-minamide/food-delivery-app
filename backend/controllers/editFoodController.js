import { Food } from "../models/Food.js";

export const editFoodController = async (req, res) => {
	const { id } = req.params;
	const { name, category, price, image, description } = req.body;

	try {
		const updatedFood = await Food.findByIdAndUpdate(id, { name, category, price, image, description }, { new: true });

		if (!updatedFood) {
			res.status(404).send({ error: "Food not found" });
		}

		res.send({ message: "Food updated successfully" });
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Internal server error" });
	}
};
