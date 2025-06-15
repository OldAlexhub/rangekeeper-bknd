import Router from "express";
import { Login, Signup } from "../controller/Login&Signup.js";
import { deleteData, getDataByUserId } from "../controller/DataEntry.js";
import { GetPredictions } from "../controller/Predictions.js";
import protectRoute from "../middleware/protectedRoute.js";

const router = Router();

//Login and Signup
router.post("/signup", Signup);
router.post("/login", Login);

//customerSection
router.delete("/deleteDataById/:id", protectRoute, deleteData);
router.get("/getData/:userId", protectRoute, getDataByUserId);
router.get("/getpredictions/:userId", protectRoute, GetPredictions);

export default router;
