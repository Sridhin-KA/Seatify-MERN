import express from "express";
import {
  createSeat,
  getSeatsByShow
} from "./seat.controller.js";

const router = express.Router();

router.post("/", createSeat);
router.get("/show/:showId", getSeatsByShow);

export default router;