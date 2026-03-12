import User from "./auth.model.js";

export const createUser = async (data) => {
  return await User.create(data);
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const getAllUsers = async () => {
  return await User.find();
};

export const updateUserRole = async (userId, role) => {
  return await User.findByIdAndUpdate(
    userId,
    { role },
    { new: true }
  );
};