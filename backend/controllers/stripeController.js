import dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();
const stripeInstance = stripe(process.env.STRIPE_KEY);

export const stripeController = async (req, res) => {
	const line_items = req.body.foodCartItem.map((item) => {
		return {
			price_data: {
				currency: "cad",
				product_data: {
					name: item.name,
					metadata: {
						id: item.id,
					},
				},
				unit_amount: item.price * 100,
			},
			quantity: item.qty,
		};
	});

	const session = await stripeInstance.checkout.sessions.create({
		line_items,
		mode: "payment",
		success_url: `${process.env.CLIENT_URL}/`,
		cancel_url: `${process.env.CLIENT_URL}/cart`,
	});

	res.send({ url: session.url });
};
