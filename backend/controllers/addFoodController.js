import { Food } from "../models/Food.js";

export const addFoodController = async (req, res) => {
	try {
		const data = await Food(req.body);
		await data.save();
		res.send({ message: "Upload successfully!" });
	} catch (error) {
		console.error("Error uploading food", error);
		res.status(500).send({ error: "Failed to upload food." });
	}
};
