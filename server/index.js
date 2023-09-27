import express from "express";
import connection from "./database/db";

const app = express();

connection();

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`The server is running on http://locathost:${PORT}`);
});
