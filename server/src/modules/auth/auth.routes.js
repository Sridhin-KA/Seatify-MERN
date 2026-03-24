import express from "express";
import {
  register,
  login,
  getUsers,
  makeEmployee,
  logout
} from "./auth.controller.js";

const router = express.Router();

/* Register */
router.post("/register", register);

/* Login */
router.post("/login", login);

// Logout
router.post("/logout", logout);


/* Get all users */
router.get("/", getUsers);

/* Promote user to employee */
router.patch("/employee/:id", makeEmployee);

export default router;