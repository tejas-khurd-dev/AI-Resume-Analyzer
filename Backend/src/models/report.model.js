import mongoose from "mongoose"


const technicalQuestionsSchema = new mongoose.Schema({
    question:{
        type: String,
        required:true
    },
    intension:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
},{_id:false})


const behavioralQuestionsSchema = new mongoose.Schema({
    question:{
        type: String,
        required:true
    },
    intension:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true
    }
},{_id:false})

const skillGapSchema = new mongoose.Schema({
    skill:{
        type:String,
        required:true
    },
    severity:{
        type:String,
        enum:["low", "medium", "high"],
        required:true
    }
},{_id:false})


const preparationPlanSchema = new mongoose.Schema({
    goal:{
        type:Number,
        required:true
    },
    focus:{
        type:String,
        required:true
    },
    tasks:[{
        type:String,
        required:true
    }]
}, {_id:false})

const interviewReportSchema  = new mongoose.Schema({
    jobDescription:{
        type:String,
        required:true
    },
    resume:{
        type:String
    },
    selfDescription: {
        type:String
    },
    matchScore:{
        type:Number,
        min: 0,
        max: 100
    },
    technicalQuestions:[technicalQuestionsSchema],
    behavioralQuestions: [behavioralQuestionsSchema],
    skillGap: [skillGapSchema],
    preparationPlan: [preparationPlanSchema],
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    title:{
        type:String,
        required: true
    }

}, {timestamps:true})


const reportModel = mongoose.model("analyzeReports", interviewReportSchema)

export default reportModel