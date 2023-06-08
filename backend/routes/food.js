import { addFoodController } from "../controllers/addFoodController.js";
import { findFoodController } from "../controllers/findFoodController.js";
import { findOneFoodController } from "../controllers/findOneFoodController.js";
import { editFoodController } from "../controllers/editFoodController.js";
import { editListController } from "../controllers/editListController.js";
import { Router } from "express";

export const router = Router();

router.get("/food", findFoodController);
router.post("/addfood", addFoodController);
router.get("/food/:id", findOneFoodController);
router.put("/food/:id", editFoodController);
router.get("/editlist", editListController);
