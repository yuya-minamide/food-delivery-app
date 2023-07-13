import { stripeController } from "../controllers/stripeController.js";
import { Router } from "express";
export const router = Router();

router.post("/create-checkout-session", stripeController);
