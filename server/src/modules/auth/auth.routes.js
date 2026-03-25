import express from "express";
import {
  register,
  login,
  getUsers,
  makeEmployee,
  logout,
  getMe,
  
} from "./auth.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";

const router = express.Router();

/* Register */
router.post("/register", register);

/* Login */
router.post("/login", login);

// Logout
router.post("/logout", logout);


/* Get all users */
router.get("/", getUsers);

router.get("/me", authenticate, getMe);
/* Promote user to employee */
router.patch("/employee/:id", makeEmployee);

export default router;