const fs = require("fs").promises;
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userFilePath = path.join(
    __dirname,
    "../database/users.json"
);

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

        let users = [];
        try{
            const userData = await fs.readFile(
                userFilePath,
                "utf-8"
            )
            users = userData.trim() ? JSON.parse(userData) : [];
        }catch(readError){
            if(readError.code === "ENOENT"){
                users = [];
            }else{
                throw readError;
            }
        }


        const existingUser = users.find(
            user => user.email.toLowerCase() === normalizeEmail
        );

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

        const newUser = {
            id: Date.now().toString(),
            name,
            email: normalizeEmail,
            password: hashedPassword
        };

        users.push(newUser);

        await fs.writeFile(
            userFilePath,
            JSON.stringify(users, null, 2)
        );


        return res.status(201).json({
            success: true,
            message: "Account created successfully",
            user: {
                id: newUser.id,
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

        let users = [];
        try{
            const userData = await fs.readFile(
                userFilePath,
                "utf-8"
            )
            users = userData.trim() ? JSON.parse(userData) : [];
        }catch(readError){
            if(readError.code === "ENOENT"){
                users = [];
            }else{
                throw readError;
            }
        }

        const user = users.find(
            user => user.email === email
        );

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
                id: user.id,
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
                id: user.id,
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

module.exports = {
    signup,
    login
};

