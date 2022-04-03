import { client } from "./index.js";

export {
  getAllMovies,
  getAllTheatres,
  addNewMovie,
  addNewTheatre,
  getMovieById,
  createUser,
  getUserByName,
  removeMoviefromTheatre,
  deleteMovieByName,
  modifyTheatre,
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

async function getUserByName(username) {
  return await client
    .db("Ticket_Booking")
    .collection("Customers")
    .findOne({ username: username });
}


async function removeMoviefromTheatre(movieName) {
  return await client
    .db("Ticket_Booking")
    .collection("Theatres")
    .deleteMany({ movie: movieName });
}

async function deleteMovieByName(movieName) {
  return await client
    .db("Ticket_Booking")
    .collection("Movies")
    .deleteOne({ name: movieName });
}

async function modifyTheatre(theatre_name, movie, show_time, nums) {
  return await client
    .db("Ticket_Booking")
    .collection("Theatres")
    .UpdateOne(
      {
        theatre_name: theatre_name,
        movie: movie,
        show_time: show_time,
      },
      {
        seats_available: {
          $set: nums,
        },
      }
    );
}