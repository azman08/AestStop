import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
  duration: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Record = mongoose.model("Record", recordSchema);

export default Record;
