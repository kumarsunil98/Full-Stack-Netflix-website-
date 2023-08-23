import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

const connection = () => {
  const DATABASE_URI = "";
  mongoose.connect(DATABASE_URI, { useNewUrlParser: true });

  mongoose.connection.on("connected", () => {
    console.log("The database connected successfully.");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("The database disconnected.");
  });
  mongoose.connection.on("error", () => {
    console.log("Error while connecting to database.", error.message);
  });
};

export default connection;
