import * as roleService from "./role.service.js";

export const createRole = async (req, res) => {

  try {

    const role = await roleService.createRole(req.body);

    res.status(201).json(role);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

export const getRoles = async (req, res) => {

  try {

    const roles = await roleService.getRoles();

    res.json(roles);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};