import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MOGODB_URI);
    console.log("connect to MONGODB");
  } catch (error) {
    console.log("Error connecting to db", error);
  }
};
