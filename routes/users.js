import express from "express";
import { createUser, getUserByName } from "../helper.js";
import bcrypt from "bcrypt";

const router = express.Router();

async function genPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

router.post("/sign-up", async function (req, res) {
  const { username, password, admin } = req.body;
  const hashedPassword = await genPassword(password);
  if (admin == "Y") {
    const newUser = {
      username: username,
      password: hashedPassword,
      admin: true
    };
    const result = await createUser(newUser);
    res.send(result);
  }
  else {
    const newUser = {
      username: username,
      password: hashedPassword
    };
    const result = await createUser(newUser);
    res.send(result);
  }
  
});

router.use("/sign-in", async function (req, res) {
  const { username, password } = req.body;
  const sameUser = await getUserByName(username);
  if (!sameUser) {
    res.send("Invalid Credentials!");
  }
  else {
    const actualPassword = sameUser.password;
    const isPasswordCorrect = await bcrypt.compare(password, actualPassword);
    if (!isPasswordCorrect) {
      res.send("Invalid Credentials!");
    }
    else{
      const isAdmin = sameUser.admin;
      if (!isAdmin) {
        res.send({isPasswordCorrect});
      }
      else {
      res.send({isPasswordCorrect, isAdmin});
      }
    }
  }
});

export const usersRouter = router;

