import mongoose from "mongoose";

const PredictionSchema = mongoose.Schema({});
const PredictionModel = mongoose.model("prediction", PredictionSchema);

export default PredictionModel;
