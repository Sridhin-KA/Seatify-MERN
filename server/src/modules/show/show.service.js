import Show from "./show.model.js";

export const createShow = async (data) => {
  return await Show.create(data);
};

export const getShows = async () => {
  return await Show.find()
    .populate("movie")
    .populate("theatre");
};

export const getShowById = async (id) => {
  return await Show.findById(id)
    .populate("movie")
    .populate("theatre");
};

export const deleteShow = async (id) => {
  return await Show.findByIdAndDelete(id);
};