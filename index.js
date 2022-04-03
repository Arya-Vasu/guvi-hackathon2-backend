import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// const PORT = 4000;
const PORT = process.env.PORT;

app.use(express.json());

// const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected!");
  return client;
}

const client = await createConnection();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/movies", async function (req, res) {
  const result = await client
    .db("Ticket_Booking")
    .collection("Movies")
    .find({})
    .toArray();
  res.send(result);
});

app.get("/theatres", async function (req, res) {
  const result = await client
    .db("Ticket_Booking")
    .collection("Theatres")
    .find({})
    .toArray();
  res.send(result);
});

app.post("/add-movies", async function (req, res) {
  const data = req.body;
  const result = await client
    .db("Ticket_Booking")
    .collection("Movies")
    .insertMany(data);
  res.send(result);
});

app.post("/add-theatres", async function (req, res) {
  const data = req.body;
  const result = await client
    .db("Ticket_Booking")
    .collection("Theatres")
    .insertMany(data);
  res.send(result);
});

app.get("/movie/:id", async function (req, res) {
  const { id } = req.params;
  const result = await client
    .db("Ticket_Booking")
    .collection("Movies")
    .findOne({ id: id });
  res.send(result);
});

app.listen(PORT, () => console.log(`Server started in ${PORT}`));
