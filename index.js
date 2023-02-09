import express from "express";
import cors from "cors";
import db from "./config/database.js";
import userRoutes from "./routes/index.js";

import "dotenv/config";

const app = express();

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.use(cors());
app.use(express.json());
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("BACKEND");
});

app.listen(process.env.PORT, () => {
  console.log("running on port 3001! 🚀");
});
