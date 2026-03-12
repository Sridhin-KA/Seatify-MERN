import * as theatreService from "./theatre.service.js";

export const createTheatre = async (req, res) => {
  try {
    const theatre = await theatreService.createTheatre(req.body);
    res.status(201).json(theatre);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTheatres = async (req, res) => {
  try {
    const theatres = await theatreService.getTheatres();
    res.json(theatres);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTheatreById = async (req, res) => {
  try {
    const theatre = await theatreService.getTheatreById(req.params.id);
    res.json(theatre);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTheatre = async (req, res) => {
  try {
    await theatreService.deleteTheatre(req.params.id);
    res.json({ message: "Theatre deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};