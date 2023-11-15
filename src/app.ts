import express from "express";

import morgan from "morgan";
import userRoutes from "./routes/userRoutes";
import bookRoutes from "./routes/bookRoutes";
import connectDB from "./config/db";

const app = express();

app.use(express.json());
app.use(morgan("combined"));

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("welcome to Varthak Library Assignment");
});

app.use("/user", userRoutes);
app.use("/books", bookRoutes);

export default app;
