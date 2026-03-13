import express from "express";

import {
  createRole,
  getRoles
} from "./role.controller.js";

const router = express.Router();

router.post("/", createRole);
router.get("/", getRoles);

export default router;