import Role from "./role.model.js";

export const createRole = async (data) => {
  return await Role.create(data);
};

export const getRoles = async () => {
  return await Role.find().populate("permissions");
};