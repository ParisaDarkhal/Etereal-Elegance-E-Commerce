import fs from "fs";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import Product from "../models/Product.js";

// Get the directory path of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the path to the "items.json" file
const filePath = path.join(__dirname, "items.json");

//Read the JSON data from the file
const jsonData = fs.readFileSync(filePath, "utf8");

// Parse the JSON data into an array of items
const items = JSON.parse(jsonData);
console.log("jsonData :>> ", jsonData);

// function to seed the database
const seedDatabase = async () => {
  try {
    //connect to database
    await mongoose.connect("mongodb://localhost:27017/eternalElegance_db", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // insert the items into the database
    await Product.insertMany(items);
    console.log("data seeded successfully!");
  } catch (err) {
    console.error("error seeding data: ", err);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
// export default seedDatabase;
