import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const port = 3000;
const app = express();
app.use(cors());

const playerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    club: String,
    position: String,
    yearOfBirth: Number,
  });
  
  const Player = mongoose.model("Player", playerSchema, "players");

app.use("/players", async(req, res) => {
  return res.json({ msg: "hallo" });
});

mongoose.connect(process.env.MONGO_CONNECTION)).then(()=>{ 
    app.listen(<WAS SCHON DA IST>); });
app.listen(port, () => {
  console.log("Projekt Nationalteam läuft auf Port:", ${port});
});