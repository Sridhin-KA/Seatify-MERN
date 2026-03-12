import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  duration: Number,
  genre: String,
  language: String,
  poster: String,
  releasedate:Date
});

export default mongoose.model("Movie", movieSchema);

