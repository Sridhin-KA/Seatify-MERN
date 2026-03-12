import Payment from "./payment.model.js";

/**
 * Create a new payment
 */
export const createPayment = async (paymentData) => {
  const payment = await Payment.create(paymentData);
  return payment;
};

/**
 * Get payment by booking id
 */
export const getPaymentByBooking = async (bookingId) => {
  const payment = await Payment.findOne({ booking: bookingId })
    .populate("booking")
    .populate("user");

  return payment;
};

/**
 * Get all payments for a user
 */
export const getUserPayments = async (userId) => {
  const payments = await Payment.find({ user: userId })
    .populate("booking")
    .sort({ createdAt: -1 });

  return payments;
};

/**
 * Update payment status
 */
export const updatePaymentStatus = async (paymentId, status, transactionId) => {
  const payment = await Payment.findByIdAndUpdate(
    paymentId,
    {
      status,
      transactionId
    },
    { new: true }
  );

  return payment;
};