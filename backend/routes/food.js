import { addFoodController } from "../controllers/addFoodController.js";
import { findFoodController } from "../controllers/findFoodController.js";
import { Router } from "express";

export const router = Router();

router.post("/addfood", addFoodController);
router.get("/food", findFoodController);
