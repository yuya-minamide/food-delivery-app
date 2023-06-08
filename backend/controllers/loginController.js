import bcrypt from "bcrypt";
import { User } from "../models/User.js";
import { Store } from "../models/Store.js";

export const loginController = async (req, res) => {
	const { email, password } = req.body;

	try {
		const userResult = await User.findOne({ email: email });
		const storeResult = await Store.findOne({ email: email });

		if (userResult) {
			const userPasswordMatch = await bcrypt.compare(password, userResult.password);
			if (userPasswordMatch) {
				const dataSend = {
					_id: userResult._id,
					nickName: userResult.nickName,
					email: userResult.email,
					password: userResult.password,
				};
				res.send({ message: "Login is successful", data: dataSend });
			} else {
				res.send({ error: "Email or password is incorrect" });
			}
		} else if (storeResult) {
			const storePasswordMatch = await bcrypt.compare(password, storeResult.password);
			if (storePasswordMatch) {
				const dataSend = {
					_id: storeResult._id,
					storeName: storeResult.storeName,
					email: storeResult.email,
					password: storeResult.password,
				};
				res.send({ message: "Login is successful", data: dataSend });
			} else {
				res.send({ error: "Email or password is incorrect" });
			}
		} else {
			res.send({ error: "Email or password is not available, please sign up" });
		}
	} catch (err) {
		console.error(err);
		res.status(500).json({ error: "Error occurred" });
	}
};
