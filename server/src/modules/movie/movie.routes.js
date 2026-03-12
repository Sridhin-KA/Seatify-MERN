import express from "express";
import * as movieController from "./movie.controller.js";

const router = express.Router();

router.post("/", movieController.addMovie);
router.get("/", movieController.getMovies);

export default router;