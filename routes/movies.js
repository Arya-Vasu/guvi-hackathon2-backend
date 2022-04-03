import express from "express";
import { getAllMovies, getMovieById, addNewMovie, removeMoviefromTheatre, deleteMovieByName } from "../helper.js";

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

router.delete("/remove-movie", async function (req, res) {
  const movieName = req.body;
  const result = await deleteMovieByName(movieName);
  const result2 = await removeMoviefromTheatre(movieName);
  res.send(result, result2);
});

export const moviesRouter = router;

