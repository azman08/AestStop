import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import recordRoute from "./routes/record.route.js";

const app = express();

app.use(cors());
app.use(express.json());

//database connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ;)");
  })
  .catch((err) => {
    console.error(err);
  });

//Routes

app.use("/api/records", recordRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
