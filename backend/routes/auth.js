import { loginController } from "../controllers/loginController.js";
import { signupController } from "../controllers/signupController.js";
import { storesignupController } from "../controllers/storesignupController.js";
import { Router } from "express";

export const router = Router();

router.post("/signup", signupController);
router.post("/storesignup", storesignupController);
router.post("/login", loginController);
