import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { moviesRouter } from "./routes/movies.js";
import {theatresRouter} from "./routes/theatres.js";

dotenv.config();

const app = express();

// const PORT = 4000;
const PORT = process.env.PORT;

// const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected!");
  return client;
}

export const client = await createConnection();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/", moviesRouter);
app.use("/", theatresRouter);

app.listen(PORT, () => console.log(`Server started in ${PORT}`));
