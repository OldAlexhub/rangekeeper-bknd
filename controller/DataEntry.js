import DataModel from "../models/Data.js";

// Delete by ID
export const deleteData = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await DataModel.findByIdAndDelete(id);

    if (!deleted) return res.status(404).json({ message: "Data not found" });

    res.status(200).json({ message: "Data deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error!" });
  }
};

// Get all data for a user
export const getDataByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const data = await DataModel.find({ userId }).sort({ date: -1 });
    res.status(200).json({ data });
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: "Server Error!" });
  }
};
