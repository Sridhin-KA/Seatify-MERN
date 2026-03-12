import express from "express";
import { register, login } from "./auth.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { isAdmin } from "../../middlewares/admin.middleware.js";
import { changeUserRole } from "./auth.controller.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/role/:id", authenticate, isAdmin, changeUserRole);
export default router;