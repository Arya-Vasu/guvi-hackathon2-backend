import { client } from "./index.js";

export {
  getAllMovies,
  getAllTheatres,
  addNewMovie,
  addNewTheatre,
  getMovieById,
  createUser,
};

async function getAllMovies() {
  return await client
    .db("Ticket_Booking")
    .collection("Movies")
    .find({})
    .toArray();
}

async function getAllTheatres() {
  return await client
    .db("Ticket_Booking")
    .collection("Theatres")
    .find({})
    .toArray();
}

async function addNewMovie(data) {
  return await client
    .db("Ticket_Booking")
    .collection("Movies")
    .insertMany(data);
}

async function addNewTheatre(data) {
  return await client
    .db("Ticket_Booking")
    .collection("Theatres")
    .insertMany(data);
}

async function getMovieById(id) {
  return await client
    .db("Ticket_Booking")
    .collection("Movies")
    .findOne({ id: id });
}

async function createUser(newUser) {
  return await client
    .db("Ticket_Booking")
    .collection("Customers")
    .insertOne(newUser);
}
