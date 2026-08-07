import { GoogleGenAI } from "@google/genai";
import config from "../config/config.js";
import * as z from "zod";

const ai = new GoogleGenAI({
    apiKey: config.GOOGLE_GENAI_API_KEY
});

// Matches interviewReportSchema fields that the AI is responsible for generating.
// jobDescription / resume / selfDescription are inputs, not generated output,
// so they're intentionally left out of this schema.
const interviewReportJsonSchema = {
    type: "object",
    properties: {
        title: {
            type: "string",
            description: "A short, descriptive title for this report, e.g. 'Full Stack Developer Interview Prep' or 'React Developer @ Acme Corp'. Should reflect the role/company from the job description if identifiable."
        },
        matchScore: {
            type: "integer",
            description: "A score from 0 to 100 indicating how well the candidate's resume and self description match the job description."
        },
        technicalQuestions: {
            type: "array",
            description: "5 technical interview questions tailored to the job description and resume.",
            items: {
                type: "object",
                properties: {
                    question: {
                        type: "string",
                        description: "The technical interview question."
                    },
                    intension: {
                        type: "string",
                        description: "What this question is evaluating and why it's relevant to this candidate/role."
                    },
                    answer: {
                        type: "string",
                        description: "A strong, concrete sample answer, ideally referencing the candidate's actual background."
                    }
                },
                required: ["question", "intension", "answer"]
            }
        },
        behavioralQuestions: {
            type: "array",
            description: "5 behavioral interview questions tailored to the candidate and role.",
            items: {
                type: "object",
                properties: {
                    question: {
                        type: "string",
                        description: "The behavioral interview question."
                    },
                    intension: {
                        type: "string",
                        description: "What trait or competency this question is evaluating."
                    },
                    answer: {
                        type: "string",
                        description: "A strong sample answer, ideally in a STAR-style format."
                    }
                },
                required: ["question", "intension", "answer"]
            }
        },
        skillGap: {
            type: "array",
            description: "Skills the candidate is missing or weak in relative to the job description.",
            items: {
                type: "object",
                properties: {
                    skill: {
                        type: "string",
                        description: "The name of the missing or weak skill."
                    },
                    severity: {
                        type: "string",
                        enum: ["low", "medium", "high"],
                        description: "How critical this gap is for succeeding in the role."
                    }
                },
                required: ["skill", "severity"]
            }
        },
        preparationPlan: {
            type: "array",
            description: "A goal-by-goal preparation plan leading up to the interview, ordered sequentially.",
            items: {
                type: "object",
                properties: {
                    goal: {
                        type: "integer",
                        description: "The goal number in the preparation plan, starting at 1."
                    },
                    focus: {
                        type: "string",
                        description: "The main focus area for this day (e.g. 'System Design Basics')."
                    },
                    tasks: {
                        type: "array",
                        items: { type: "string" },
                        description: "Concrete, actionable tasks to complete on this day."
                    }
                },
                required: ["goal", "focus", "tasks"]
            }
        }
    },
    required: [
        "title",
        "matchScore",
        "technicalQuestions",
        "behavioralQuestions",
        "skillGap",
        "preparationPlan"
    ]
};

const interviewReportSchema = z.fromJSONSchema(interviewReportJsonSchema);

async function generateInterviewReport({ resume, selfDescription, jobDescription }) {
    const prompt = `
        You are an expert technical interview coach. Analyze the candidate's resume and
        self description against the job description below, and produce a structured
        interview preparation report.

        Resume:
        """
        ${resume}
        """

        Candidate's self description:
        """
        ${selfDescription}
        """

        Job description:
        """
        ${jobDescription}
        """

        Instructions:
        1. Give a matchScore from 0 to 100 for how well this candidate fits the role.
        2. Generate 5 technicalQuestions relevant to the job description, each with the
        question, its intension (what it's testing), and a strong sample answer.
        3. Generate 5 behavioralQuestions relevant to the role, each with the question,
        its intension, and a strong sample answer (STAR format where possible).
        4. Identify the candidate's skillGap: skills required by the job description
        that are missing or weak in the resume/self description, each with a
        severity of "low", "medium", or "high".
        5. Build a preparationPlan of at least 5 days, each with a day number, a focus
        area, and a list of concrete tasks.
    `;

    const interaction = await ai.interactions.create({
        model: "gemini-3-flash-preview",
        input: prompt,
        response_format: {
            type: "text",
            mime_type: "application/json",
            schema: interviewReportJsonSchema
        }
    });

    const generated = interviewReportSchema.parse(JSON.parse(interaction.output_text));

    return {
        jobDescription,
        resume,
        selfDescription,
        ...generated
    };
}

export default generateInterviewReport;