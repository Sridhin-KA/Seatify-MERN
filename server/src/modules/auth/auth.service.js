import User from "./auth.model.js";

export const createUser = async (data) => {
  return await User.create(data);
};

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const getUsers = async () => {
  return await User.find();
};

export const getUserById = async (id) => {
  return await User.findById(id);
};

export const makeEmployee = async (id) => {
  return await User.findByIdAndUpdate(
    id,
    { isEmployee: true },
    { new: true }
  );
};