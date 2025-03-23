import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "PropertyDb",
    });
    console.log("db connected");
  } catch (error) {
    console.log("failed to connect with database");
    console.log(error);
  }
};
