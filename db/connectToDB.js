import mongoose from "mongoose";

const connectToDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log(`Connected to MongoDB 🙋`);
  } catch (error) {
    console.log(`Failed To Connect to MongoDB`);
  }
};

export default connectToDB;
