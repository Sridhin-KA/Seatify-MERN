import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking",
    required: true
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  amount: {
    type: Number,
    required: true
  },

  paymentMethod: {
    type: String,
    enum: ["card", "upi", "wallet"],
    default: "upi"
  },

  status: {
    type: String,
    enum: ["pending", "success", "failed"],
    default: "pending"
  },

  transactionId: {
    type: String
  }

}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);