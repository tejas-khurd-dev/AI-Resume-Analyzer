import {Router} from "express";
import { createInterviewReport } from "../controllers/interviewReport.controller.js";
import { authUserMiddleware } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/pdfRead.middleware.js";

const aiReportRouter = Router()

aiReportRouter.post("/", authUserMiddleware, upload.single("resume"), createInterviewReport)

export default aiReportRouter