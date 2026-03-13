import Employee from "./employee.model.js";

export const createEmployee = async (data) => {
  return await Employee.create(data);
};

export const getEmployees = async () => {
  return await Employee.find()
    .populate("user")
    .populate({
      path: "role",
      populate: { path: "permissions" }
    });
};