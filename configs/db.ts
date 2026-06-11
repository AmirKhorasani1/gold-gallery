import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    }

    const mongoUrl = process.env.MONGO_URL;

    if (!mongoUrl) {
      throw new Error("MONGO_URL is not defined");
    }

    await mongoose.connect(mongoUrl);

    console.log("Connected to DB successfully");

  } catch (err) {
    console.log("DB Connection Error:", err);
  }
};

export default connectToDB;