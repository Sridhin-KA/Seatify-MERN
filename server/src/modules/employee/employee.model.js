import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    required: true
  },

  department: String,

  salary: Number

}, { timestamps: true });

export default mongoose.model("Employee", employeeSchema);