import * as pdfParse from "pdf-parse";
import generateInterviewReport from "../services/ai.service.js";
import reportModel from "../models/report.model.js";


export async function createReport(req, res) {
    try {
        const { selfDescription, jobDescription } = req.body;

        if (!jobDescription) {
            return res.status(400).json({
                success: false,
                message: "jobDescription is required"
            });
        }

        if (!req.file && !selfDescription) {
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
            

        const savedReport = await reportModel.create({...reportData, user:req.user.id});

        return res.status(201).json({
            success: true,
            report: savedReport
        });
    } catch (error) {
        if (error.status === 429 || error.statusCode === 429) {
            return res.status(429).json({
                success: false,
                message: "Gemini API rate limit exceeded. Please try again in a few seconds."
            });
        }

        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

export async function getReportById(req, res) {
    const {reportID} = req.params
    const report = await reportModel.findOne({_id: reportID, user:req.user.id})

    if(!report) return res.status(404).json({msg:"report not found"})

    res.status(200).json({
        msg: "report fetched successfully",
        report
    })
}

export async function getReports(req, res) {
  
    const reports = await reportModel.find({user:req.user.id})
;
    if(reports.length === 0) return res.status(404).json({msg:"report not found"})

    res.status(200).json({
        msg: "report fetched successfully",
        reports
    })
}