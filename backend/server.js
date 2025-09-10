 import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import router from "./routes/transactionRoutes.js";

dotenv.config();
const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/transactions", router);

// mongodb connection
connectDb();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("server start");
});

 