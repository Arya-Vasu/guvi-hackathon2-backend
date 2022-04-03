import express from "express";
import { getAllMovies, getMovieById, getAllTheatres, addNewMovie, addNewTheatre } from "../helper.js";

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

router.get("/theatres", async function (req, res) {
  const result = await getAllTheatres();
  res.send(result);
});

router.post("/add-movies", async function (req, res) {
  const data = req.body;
  const result = await addNewMovie(data);
  res.send(result);
});

router.post("/add-theatres", async function (req, res) {
  const data = req.body;
  const result = await addNewTheatre(data);
  res.send(result);
});

export const moviesRouter = router;
