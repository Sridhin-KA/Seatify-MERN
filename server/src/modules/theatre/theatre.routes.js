import express from "express";
import {
  createTheatre,
  getTheatres,
  getTheatreById,
  deleteTheatre
} from "./theatre.controller.js";

const router = express.Router();

router.post("/", createTheatre);
router.get("/", getTheatres);
router.get("/:id", getTheatreById);
router.delete("/:id", deleteTheatre);

export default router;