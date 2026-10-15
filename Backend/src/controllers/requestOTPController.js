const PasswordOTP = require("../models/PasswordOTP");
const transporter = require("../services/emailServices");

const requestOTP = async(req , res) => {
    try{
        const otp = Math.floor(100000 + Math.random() * 900000);

        const expiresAt = new Date(Date.now() + 5 * 60 * 1000); //5 minutes

        const otpRecord = await PasswordOTP.create({
            userId: req.user._id,
            otp: otp.toString(),
            expiresAt: expiresAt
        });

        return res.status(200).json({
            success: true,
            message: "OTP generated sucessfully"
        })

    }catch(error){
        console.log("Request OTP error: " , error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"
        });
    }
};

const sendOTP = async (email, otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your Passowrd Change OTP",
        text: `Your ots is ${otp}. It is valid for 5 minutes.`
    });
};

module.exports = {
    requestOTP
}