const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
    signup,
    login,
    getUser,
    updateName,
    deleteUser
} = require("../controllers/authController");
const { requestOTP } = require("../controllers/requestOTPController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/getUser", authMiddleware, getUser); 
router.put("/updatename", authMiddleware, updateName);
router.delete("/deleteUser", authMiddleware, deleteUser);
router.post("/requestOTP" , authMiddleware, requestOTP)

module.exports = router;