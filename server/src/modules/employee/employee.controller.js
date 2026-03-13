import * as employeeService from "./employee.service.js";

export const createEmployee = async (req, res) => {

  try {

    const employee = await employeeService.createEmployee(req.body);

    res.status(201).json(employee);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const getEmployees = async (req, res) => {

  try {

    const employees = await employeeService.getEmployees();

    res.json(employees);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};