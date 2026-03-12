import express from "express";
import {
  createBooking,
  getBookings,
  getBookingById
} from "./booking.controller.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings);
router.get("/:id", getBookingById);

export default router;