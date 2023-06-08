import { Food } from "../models/Food.js";

export const editListController = async (req, res) => {
	const data = await Food.find({});
	res.send(JSON.stringify(data));
};
