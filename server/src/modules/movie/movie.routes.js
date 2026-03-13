import express from "express";
import * as movieController from "./movie.controller.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { isAdmin } from "../../middlewares/admin.middleware.js";


const router = express.Router();

router.post("/addmovie",authenticate, isAdmin, movieController.addMovie);
router.get("/getmovies", movieController.getMovies);

export default router;