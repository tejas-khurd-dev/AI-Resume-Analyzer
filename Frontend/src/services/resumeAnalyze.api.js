import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8000/api/",
    withCredentials:true
})


export async function resumeAnalyze() {
  try{
    const response = await api.post("/ai-report");

    console.log("Report analyze successful:");

    return response.data
  }
  catch (error) {
    console.error(error);
  }
}