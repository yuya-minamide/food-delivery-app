import bcrypt from "bcrypt";
import { Store } from "../models/Store.js";

export const storesignupController = async (req, res) => {
	const { storeName, email, password } = req.body;

	try {
		const user = await Store.findOne({ email: email });
		if (user) {
			res.send({ error: "Email id is already registered!" });
		} else {
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);

			const newStore = new Store({
				storeName: storeName,
				email: email,
				password: hashedPassword,
			});

			await newStore.save();
			res.send({ message: "Successfully signed up" });
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: "Internal server error" });
	}
};
