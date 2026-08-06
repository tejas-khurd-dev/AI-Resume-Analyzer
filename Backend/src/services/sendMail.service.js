import nodemailer from "nodemailer";
import config from "../config/config.js";

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.EMAIL,
        pass: config.EMAIL_PASSWORD,
    },
});

const sendOTP = async (email, otp) => {
    await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Verify your account",
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
            <h2 style="color:#2563eb;">Verify Your Account</h2>

            <p>Hello,</p>

            <p>Your verification code is:</p>

            <div style="
                font-size:32px;
                font-weight:bold;
                letter-spacing:8px;
                background:#f3f4f6;
                padding:15px;
                text-align:center;
                border-radius:8px;
                margin:20px 0;
            ">
                ${otp}
            </div>

            <p>This code is valid for <b>5 minutes</b>.</p>

            <p>If you didn't request this, you can safely ignore this email.</p>

            <hr>

            <p style="font-size:12px;color:#6b7280;">
                AI Resume Analyzer Team
            </p>
            </div>
        `
    });
};

export default sendOTP