import mongoose from "mongoose";

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/eternalElegance_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

export default { connect };
