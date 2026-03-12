import Seat from "./seat.model.js";

export const createSeat = async (data) => {
  return await Seat.create(data);
};

export const getSeatsByShow = async (showId) => {
  return await Seat.find({ show: showId });
};

export const updateSeat = async (seatId, data) => {
  return await Seat.findByIdAndUpdate(seatId, data, { new: true });
};