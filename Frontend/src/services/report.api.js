import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/ai-report`,
    withCredentials:true
})


export async function generateReport({jobDescription, selfDescription, resumeFile}) {
  try{
    const formData = new FormData()
    formData.append("jobDescription", jobDescription)
    formData.append("selfDescription", selfDescription)
    formData.append("resume", resumeFile)

    const response = await api.post("/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data
  }
  catch (error) {
    console.error(error);
    throw error
  }
}

export async function getReports() {
  try{

    const response = await api.get("/reports");
    return response.data
  }
  catch (error) {
    console.error(error);
  }
}

export async function getReportByID(reportID) {
  try{
    const response = await api.get(`/${reportID}`);

    return response.data
  }
  catch (error) {
    console.error(error);
  }
}
