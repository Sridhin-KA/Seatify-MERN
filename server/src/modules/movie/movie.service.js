import Movie from "./movie.model.js";

export const createMovie = async (data) => {
  return await Movie.create(data);
};

export const getMovies = async () => {
  return await Movie.find();
};

export default {
  createMovie,
  getMovies,
};
