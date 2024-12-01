import express from "express";
import Record from "../models/record.models.js";

const router = express.Router();

//New Record

router.post("/", async (req, res) => {
  const { duration } = req.body;

  try {
    const newRecord = new Record({ duration });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

//Get Rec

router.get("/", async (req, res) => {
  try {
    const allRecords = await Record.findOne().sort({ createdAt: -1 });
    res.status(200).json(allRecords);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

export default router;
