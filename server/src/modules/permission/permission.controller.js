import * as permissionService from "./permission.service.js";

export const createPermission = async (req, res) => {
  try {

    const permission = await permissionService.createPermission(req.body);

    res.status(201).json(permission);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPermissions = async (req, res) => {
  try {

    const permissions = await permissionService.getPermissions();

    res.json(permissions);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};