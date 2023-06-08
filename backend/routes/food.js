import { addFoodController } from "../controllers/addFoodController.js";
import { deleteFoodController } from "../controllers/deleteFoodController.js";
import { editFoodController } from "../controllers/editFoodController.js";
import { editListController } from "../controllers/editListController.js";
import { findFoodController } from "../controllers/findFoodController.js";
import { findOneFoodController } from "../controllers/findOneFoodController.js";
import { Router } from "express";

export const router = Router();

router.get("/food", findFoodController);
router.get("/editlist", editListController);
router.get("/food/:id", findOneFoodController);
router.post("/addfood", addFoodController);
router.put("/food/:id", editFoodController);
router.delete("/food/:id", deleteFoodController);
