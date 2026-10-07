const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email and password are required"
            });
        }

        const normalizeEmail = email.trim().toLowerCase();

        const existingUser = await User.findOne({
            email: normalizeEmail
        });


        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );

        const newUser = await User.create({
            name,
            email: normalizeEmail,
            password: hashedPassword
        });

        return res.status(201).json({
            success: true,
            message: "Account created successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });
    } catch (error) {
        console.error("Signup error: ", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

const login = async(req , res) => {
    try{
        const {email , password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email ans password are required"
            });
        }

        const normalizeEmail = email.trim().toLowerCase();

        const user = await User.findOne({
            email: normalizeEmail
        });

        if(!user){
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if(!isPasswordCorrect){
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    }catch(error){
        console.error("Login error: " , error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

const getme = async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select("--password");

        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

    }catch(error){
        console.error("Get user error: " ,error);
        return res.status(200).json({
            success: true,
            message: "Something went wrong"
        });
    }
};

module.exports = {
    signup,
    login,
    getme
};

