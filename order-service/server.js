require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // your React app
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

connectDB();

app.use("/api/orders", require("./routes/orderRoutes"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
