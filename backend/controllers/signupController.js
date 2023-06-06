import bcrypt from "bcrypt";
import { User } from "../models/User.js";

export const signupController = async (req, res) => {
	const { nickName, email, password } = req.body;

	try {
		const user = await User.findOne({ email: email });
		if (user) {
			res.send({ message: "Email id is already registered!", alert: false });
		} else {
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);

			const newUser = new User({
				nickName: nickName,
				email: email,
				password: hashedPassword,
			});

			await newUser.save();
			res.send({ message: "Successfully signed up", alert: true });
		}
	} catch (err) {
		console.log(err);
		res.status(500).send({ message: "Internal server error", alert: false });
	}
};
