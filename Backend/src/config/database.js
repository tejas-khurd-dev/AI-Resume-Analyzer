import mongoose, { mongo } from "mongoose";
import config from "./config.js";

async function connectDB() {
    try{
        await mongoose.connect(config.MONGO_URI)
        console.log("connected to database")
    }
    catch(err){
        console.log("Database connection fail", err)
    }
}

export default connectDB