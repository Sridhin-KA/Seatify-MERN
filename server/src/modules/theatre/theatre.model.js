import mongoose from "mongoose";

const theatreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  screens: {
    type: Number,
    default: 1
  }
}, { timestamps: true });

export default mongoose.model("Theatre", theatreSchema);