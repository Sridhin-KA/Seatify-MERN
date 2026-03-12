import * as paymentService from "./payment.service.js";

export const createPayment = async (req, res) => {
  try {
    const payment = await paymentService.createPayment(req.body);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPaymentByBooking = async (req, res) => {
  try {
    const payment = await paymentService.getPaymentByBooking(req.params.bookingId);
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserPayments = async (req, res) => {
  try {
    const payments = await paymentService.getUserPayments(req.params.userId);
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePaymentStatus = async (req, res) => {
  try {
    const payment = await paymentService.updatePaymentStatus(
      req.params.paymentId,
      req.body.status,
      req.body.transactionId
    );
    res.json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};