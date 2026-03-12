import Booking from "./booking.model.js";

export const createBooking = async (data) => {
  return await Booking.create(data);
};

export const getBookings = async () => {
  return await Booking.find()
    .populate("user")
    .populate("show")
    .populate("seats");
};

export const getBookingById = async (id) => {
  return await Booking.findById(id)
    .populate("user")
    .populate("show")
    .populate("seats");
};