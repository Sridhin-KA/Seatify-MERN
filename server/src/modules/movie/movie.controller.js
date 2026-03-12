
import movieService from "./movie.service.js";

export const addMovie = async (req, res) => {
  const movie = await movieService.createMovie(req.body);
  res.json(movie);
};

export const getMovies = async (req, res) => {
  const movies = await movieService.getMovies();
  res.json(movies);
};

export default {
  addMovie,
  getMovies,
};