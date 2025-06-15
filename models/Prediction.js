import mongoose, { now } from "mongoose";

const PredictionSchema = mongoose.Schema({});
const PredictionModel = mongoose.model("Prediction", PredictionSchema);

export default PredictionModel;
