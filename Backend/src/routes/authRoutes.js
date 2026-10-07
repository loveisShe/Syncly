const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
    signup,
    login,
    getme
} = require("../controllers/authController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getme", authMiddleware, getme); 

module.exports = router;