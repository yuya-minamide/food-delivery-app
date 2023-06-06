import { User } from "../models/User.js";
import { Store } from "../models/Store.js";

export const loginController = async (req, res) => {
	const { email, password } = req.body;

	try {
		const userResult = await User.findOne({ email: email, password: password });
		const storeResult = await Store.findOne({ email: email, password: password });

		if (userResult) {
			const dataSend = {
				_id: userResult._id,
				nickName: userResult.nickName,
				email: userResult.email,
				password: userResult.password,
			};
			res.send({ message: "Login is successfully", alert: true, data: dataSend });
		} else if (storeResult) {
			const dataSend = {
				_id: storeResult._id,
				storeName: storeResult.storeName,
				email: storeResult.email,
				password: storeResult.password,
			};
			res.send({ message: "Login is successfully", alert: true, data: dataSend });
		} else {
			res.send({ message: "Email or password is not available, please sign up", alert: false });
		}
	} catch (err) {
		console.log(err);
		res.send({ message: "Error occurred", alert: false });
	}
};
