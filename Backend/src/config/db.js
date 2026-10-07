const mongoose = require("mongoose");

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongoose conected sucessfully");
    }catch(error){
        console.error("Mongoose connection failed: " , error.message);
        process.exit(1);
    }
};

module.exports = connectDB;