require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// ✅ Correct CORS settings for local React frontend
// app.use(cors({
//     origin: ["http://localhost:5173","https://frontend-bite-speed.vercel.app"],
//     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//     credentials: true  // true only if sending cookies/auth headers
// }));
app.use(cors({
    origin: "*", //  Allow all origins (not safe for production)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS','PATCH'],
}));

app.use(express.json());
connectDB();

app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Order Service running on port ${PORT}`));
