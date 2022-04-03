import express from "express";
import { getAllTheatres, addNewTheatre } from "../helper.js";

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

export const theatresRouter = router;
