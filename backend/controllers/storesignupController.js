import { Store } from "../models/Store.js";

export const storesignupController = (req, res) => {
	const { email } = req.body;

	Store.findOne({ email: email })
		.then((result) => {
			if (result) {
				res.send({ message: "Email id is already register!", alert: false });
			} else {
				const data = new Store(req.body);
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
