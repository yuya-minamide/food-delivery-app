import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 8080;

connectDB();

// User
const userSchema = mongoose.Schema({
	nickName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

// Store
const storeSchema = mongoose.Schema({
	storeName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

const userModel = mongoose.model("user", userSchema);
const storeModel = mongoose.model("store", storeSchema);

app.get("/", (req, res) => {
	res.send("Server is running!");
});

// User sign up
app.post("/signup", (req, res) => {
	const { email } = req.body;

	userModel
		.findOne({ email: email })
		.then((result) => {
			if (result) {
				res.send({ message: "Email id is already register!", alert: false });
			} else {
				const data = new userModel(req.body);
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
});

// Store sign up
app.post("/storesignup", (req, res) => {
	const { email } = req.body;

	storeModel
		.findOne({ email: email })
		.then((result) => {
			if (result) {
				res.send({ message: "Email id is already register!", alert: false });
			} else {
				const data = new storeModel(req.body);
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
});

// Login
app.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		const userResult = await userModel.findOne({ email: email, password: password });
		const storeResult = await storeModel.findOne({ email: email, password: password });

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
});

// Food section
const foodSchema = mongoose.Schema({
	restaurantname: String,
	name: String,
	category: String,
	price: String,
	image: String,
	description: String,
});

const foodModel = mongoose.model("food", foodSchema);

app.post("/addfood", async (req, res) => {
	const data = await foodModel(req.body);
	data.save();
	res.send({ message: "Upload successfully!" });
});

app.get("/food", async (req, res) => {
	const data = await foodModel.find({});
	res.send(JSON.stringify(data));
});

app.listen(PORT, () => {
	console.log(`This app listening at http://localhost:${PORT}`);
});
