import express from "express";
import { login, logout, signup } from "../controllers/auth.controllers.js";
import { protectRoute } from "../MiddleWare/protectRoute.js";
import { authCheck } from "../controllers/auth.controllers.js"; 

const router = express.Router();

router.post("/signup",signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/authCheck", authCheck);

// 

export default router;
