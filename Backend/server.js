require("dotenv").config();

const express = require("express");
const authRoutes = require("./src/routes/authRoutes");
const cors = require("cors");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/auth" , authRoutes);

app.get("/", (req, res) => {
    res.json({ message: "SYNCly Backend is running successfully! 🚀" });
});

app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});