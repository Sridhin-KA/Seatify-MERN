import express from "express";
import {
  createPayment,
  getPaymentByBooking,
  getUserPayments,
  updatePaymentStatus
} from "./payment.controller.js";

const router = express.Router();

/**
 * Create payment
 * POST /api/payments
 */
router.post("/", createPayment);

/**
 * Get payment by booking
 * GET /api/payments/booking/:bookingId
 */
router.get("/booking/:bookingId", getPaymentByBooking);

/**
 * Get payments of a user
 * GET /api/payments/user/:userId
 */
router.get("/user/:userId", getUserPayments);

/**
 * Update payment status
 * PATCH /api/payments/:paymentId
 */
router.patch("/:paymentId", updatePaymentStatus);

export default router;