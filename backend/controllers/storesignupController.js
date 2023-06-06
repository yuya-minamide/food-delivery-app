import bcrypt from "bcrypt";
import { Store } from "../models/Store.js";

export const storesignupController = async (req, res) => {
	const { storeName, email, password } = req.body;

	try {
		const user = await Store.findOne({ email: email });
		if (user) {
			res.send({ message: "Email id is already registered!", alert: false });
		} else {
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);

			const newStore = new Store({
				storeName: storeName,
				email: email,
				password: hashedPassword,
			});

			await newStore.save();
			res.send({ message: "Successfully signed up", alert: true });
		}
	} catch (err) {
		console.log(err);
		res.status(500).send({ message: "Internal server error", alert: false });
	}
};
