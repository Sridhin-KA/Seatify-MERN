import Theatre from "./theatre.model.js";

export const createTheatre = async (data) => {
  return await Theatre.create(data);
};

export const getTheatres = async () => {
  return await Theatre.find();
};

export const getTheatreById = async (id) => {
  return await Theatre.findById(id);
};

export const deleteTheatre = async (id) => {
  return await Theatre.findByIdAndDelete(id);
};