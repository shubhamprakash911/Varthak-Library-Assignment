import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const isConnect = await mongoose.connect(process.env.MONGO_URL as string);
    console.log(`MongoDB connected: ${isConnect.connection.host}`);
  } catch (error: any) {
    console.log(`Error ${error.message}`);
  }
};

export default connectDB;
