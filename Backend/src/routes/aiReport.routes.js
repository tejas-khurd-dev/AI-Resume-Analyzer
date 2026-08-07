import {Router} from "express";
import { createReport, getReportById, getReports } from "../controllers/report.controller.js";
import { authUserMiddleware } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/pdfRead.middleware.js";

const aiReportRouter = Router()

aiReportRouter.post("/", authUserMiddleware, upload.single("resume"), createReport)

aiReportRouter.get("/reports", authUserMiddleware, getReports)

aiReportRouter.get("/:reportID", authUserMiddleware, getReportById)


export default aiReportRouter