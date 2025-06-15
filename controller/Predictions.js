import PredictionModel from "../models/Prediction.js";

export const GetPredictions = async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await PredictionModel.find({ userId });

    res.status(200).json({ message: `Predicted Data`, data });
  } catch (error) {
    res.status(500).json({ message: `Server Error!` });
  }
};
