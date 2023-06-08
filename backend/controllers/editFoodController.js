import { Food } from "../models/Food.js";

export const editFoodController = async (req, res) => {
	const { id } = req.params;
	const { name, category, price, image, description } = req.body;

	try {
		const updatedFood = await Food.findByIdAndUpdate(id, { name, category, price, image, description }, { new: true });

		if (updatedFood) {
			res.send({ message: "Food updated successfully", alert: true });
		} else {
			res.status(404).send({ message: "Food not found", alert: false });
		}
	} catch (err) {
		console.log(err);
		res.status(500).send({ message: "Internal server error", alert: false });
	}
};
