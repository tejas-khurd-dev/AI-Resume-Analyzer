import * as pdfParse from "pdf-parse";
import generateInterviewReport from "../services/ai.service.js";
import interviewReportModel from "../models/interviewReport.model.js";
import otpModel from "../models/otp.model.js";
import sendOTP  from "../services/sendMail.service.js";

async function createInterviewReport(req, res) {
    try {
        const { selfDescription, jobDescription } = req.body;

        if (!jobDescription) {
            return res.status(400).json({
                success: false,
                message: "jobDescription is required"
            });
        }

        if (!req.file || !selfDescription) {
            return res.status(400).json({
                success: false,
                message: "resume (PDF file) or selfDescription are required"
            });
        }

        const parser = new pdfParse.PDFParse(
            Uint8Array.from(req.file.buffer)
        );

        const result = await parser.getText();

        const resume = result.text?.trim();

        if (!resume) {
            return res.status(400).json({
                success: false,
                message: "Could not extract text from the uploaded PDF"
            });
        }

        const reportData = await generateInterviewReport({
            resume,
            selfDescription,
            jobDescription
        });

        const savedReport = await interviewReportModel.create(reportData);

        return res.status(201).json({
            success: true,
            data: savedReport
        });
    } catch (error) {
        console.error("createInterviewReport error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to generate interview report",
            error: error.message
        });
    }
}

export { createInterviewReport };