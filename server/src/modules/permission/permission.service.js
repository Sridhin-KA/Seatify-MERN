import Permission from "./permission.model.js";

export const createPermission = async (data) => {
  return await Permission.create(data);
};

export const getPermissions = async () => {
  return await Permission.find();
};