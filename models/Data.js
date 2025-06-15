import mongoose, { now } from "mongoose";

const DataSchema = mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: Date, default: now },
  fullRange: { type: Number, required: true },
  currentRange: { type: Number, required: true },
  currentPercent: { type: Number, required: true },
  currentFullRange: { type: Number, required: true },
  batteryHealth: { type: Number, required: true },
  lostMiles: { type: Number, required: true },
});
const DataModel = mongoose.model("datas", DataSchema);

export default DataModel;
