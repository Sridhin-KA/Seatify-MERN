import * as seatService from "./seat.service.js";

export const createSeat = async (req, res) => {
  try {
    const seat = await seatService.createSeat(req.body);
    res.status(201).json(seat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getSeatsByShow = async (req, res) => {
  try {
    const seats = await seatService.getSeatsByShow(req.params.showId);
    res.json(seats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};