import mongoose from "mongoose";

const showSchema = new mongoose.Schema({
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Movie",
    required: true
  },
  theatre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theatre",
    required: true
  },
  screenNumber: {
    type: Number,
    required: true
  },
  showTime: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export default mongoose.model("Show", showSchema);