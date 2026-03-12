import express from "express";
import {
  createShow,
  getShows,
  getShowById,
  deleteShow
} from "./show.controller.js";

const router = express.Router();

router.post("/", createShow);
router.get("/", getShows);
router.get("/:id", getShowById);
router.delete("/:id", deleteShow);

export default router;