import express from "express";
import { getAllTheatres, addNewTheatre, modifyTheatre } from "../helper.js";

const router = express.Router();

router.get("/theatres", async function (req, res) {
  const result = await getAllTheatres();
  res.send(result);
});

router.post("/add-theatres", async function (req, res) {
  const data = req.body;
  const result = await addNewTheatre(data);
  res.send(result);
});

router.put("/reduce-seats", async function (req, res) {
  const { theatre_name, movie, show_time, nums } = req.body;
  const modifiedTheatre = await modifyTheatre(theatre_name, movie, show_time, nums);
});

export const theatresRouter = router;

