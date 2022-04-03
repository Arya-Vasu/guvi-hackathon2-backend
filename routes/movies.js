import express from "express";
import { getAllMovies, getMovieById, addNewMovie } from "../helper.js";

const router = express.Router();

router.get("/movies", async function (req, res) {
  const result = await getAllMovies();
  res.send(result);
});

router.get("/movie/:id", async function (req, res) {
  const { id } = req.params;
  const result = await getMovieById(id);
  res.send(result);
});

router.post("/add-movies", async function (req, res) {
  const data = req.body;
  const result = await addNewMovie(data);
  res.send(result);
});

export const moviesRouter = router;
