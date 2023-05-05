import { connectDB } from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 8080;

connectDB();

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

const userModel = mongoose.model("user", userSchema);

app.get("/", (req, res) => {
	res.send("Server is running!");
});

// Sign up
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

// Login
app.post("/login", async (req, res) => {
	const { email, password } = req.body;

	try {
		const result = await userModel.findOne({ email: email, password: password });
		if (result) {
			const dataSend = {
				_id: result._id,
				nickName: result.nickName,
				email: result.email,
				password: result.password,
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

app.listen(PORT, () => {
	console.log(`This app listening at http://localhost:${PORT}`);
});
