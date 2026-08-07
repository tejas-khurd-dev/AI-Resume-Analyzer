import { useContext, useEffect } from "react";
import { ReportContext } from "../services/report.context";
import { generateReport, getReportByID, getReports } from "../services/report.api.js";
import { useNavigate } from "react-router-dom";

export const useReport = () =>{
    const context = useContext(ReportContext)
    const {loading, setLoading, report, setReport, reports, setReports} = context

    const navigate= useNavigate()


    async function handleGenerateReport({resumeFile, selfDescription, jobDescription}) {
        setLoading(true)
        try{
            const data = await generateReport({resumeFile, selfDescription, jobDescription})
   
            setReport(data.report)

            return data.report
        }
        catch (error) {
            if (error.response?.status === 429) {
                alert("AI rate limit exceeded. Please try again in a few hrs.");
            } else {
                alert("Something went wrong.");
            }
            navigate("/")
        }
        finally{
            setLoading(false)
        }
    }

    async function handleGetReportByID(reportID) {
        setLoading(true)
        try{
            const data = await getReportByID(reportID)
            
            setReport(data.report)
            return data.report
        }
        catch(err){
            console.log(err)
            return null
        }
        finally{
            setLoading(false)
        }
    }

    

    useEffect(() => {
        async function handleGetReports() {
            setLoading(true)
            try{
                const data = await getReports()
                setReports(data.reports)
            }
            catch(err){
                console.log(err)
            }
            finally{
                setLoading(false)
            }
        }

        handleGetReports()
    }, [setLoading, setReports])

    return{
        loading, setLoading, report, setReport, reports, setReports, handleGenerateReport, handleGetReportByID,
    }

}
