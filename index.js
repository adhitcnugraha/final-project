import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

const port = process.env.PORT;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// db config
mongoose.connect(process.env.CONNECTION_URL);

const db = mongoose.connection;
db.once("open", () => {
  console.log("db is connected");
});

//listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
