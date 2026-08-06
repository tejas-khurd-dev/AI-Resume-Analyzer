import app from "./src/app.js"
import config from "./src/config/config.js"
import connectDB from "./src/config/database.js"
import generateInterviewReport from "./src/services/ai.service.js";

// import { dummyResume, dummySelfDescription, dummyJobDescription } from "./testData.js";

// TEST GENAI WORKING

// generateInterviewReport({
//     resume:dummyResume,
//     selfDescription:dummySelfDescription,
//     jobDescription:dummyJobDescription
// })
//     .then((report) => console.log("Generated report:", JSON.stringify(report, null, 2)))
//     .catch((err) => console.error("Test failed:", err));

connectDB()
app.listen(config.PORT, ()=> console.log("server is running"))