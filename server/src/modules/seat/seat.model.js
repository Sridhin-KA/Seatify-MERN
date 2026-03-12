import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Show",
    required: true
  },

  seatNumber: {
    type: String,
    required: true
  },

  isBooked: {
    type: Boolean,
    default: false
  },

  isLocked: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

export default mongoose.model("Seat", seatSchema);