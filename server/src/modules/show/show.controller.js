import * as showService from "./show.service.js";

export const createShow = async (req, res) => {
  try {
    const show = await showService.createShow(req.body);
    res.status(201).json(show);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getShows = async (req, res) => {
  try {
    const shows = await showService.getShows();
    res.json(shows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getShowById = async (req, res) => {
  try {
    const show = await showService.getShowById(req.params.id);
    res.json(show);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteShow = async (req, res) => {
  try {
    await showService.deleteShow(req.params.id);
    res.json({ message: "Show deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};