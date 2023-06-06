import { User } from "../models/User.js";

export const signupController = (req, res) => {
	const { email } = req.body;

	User.findOne({ email: email })
		.then((result) => {
			if (result) {
				res.send({ message: "Email id is already register!", alert: false });
			} else {
				const data = new User(req.body);
				return data.save();
			}
		})
		.then(() => {
			res.send({ message: "Successfully sign up", alert: true });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).send({ message: "Internal server error", alert: false });
		});
};
