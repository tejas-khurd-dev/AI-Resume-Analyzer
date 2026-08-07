import React from "react";
import { useNavigate } from "react-router-dom";
import { FileText, ChevronRight, Inbox } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import Loading from "../components/Loading";
import { useReport } from "../hooks/useReport";

const scoreColor = (score) => {
  if (score >= 75) return "text-success";
  if (score >= 50) return "text-[#F59E0B]";
  return "text-[#EF4444]";
};

const formatDate = (dateString) =>
  new Date(dateString).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

const PreviousAnalyzed = () => {
  const navigate = useNavigate();
  const { reports, handleGetReportByID } = useReport()

  if (!reports) return <Loading />;

  const handleOnClickReport = async (report)=>{
    await handleGetReportByID(report._id)
    navigate(`/dashboard/report/${report._id}`)
  }

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-2 text-primary">
        Previous Analyzed
      </h1>
      <p className="text-sm mb-8 text-muted">
        All your past resume analyses, saved for reference.
      </p>

      {reports.length === 0 ? (
        <div className="rounded-2xl bg-card border border-dashed border-border p-10 flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-gradFrom/15">
            <Inbox size={26} className="text-gradFrom" />
          </div>
          <h2 className="font-semibold mb-1 text-primary">No reports yet</h2>
          <p className="text-sm mb-6 max-w-sm text-muted">
            Upload a resume from the dashboard to generate your first
            analysis.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-5 py-2.5 rounded-lg font-medium text-primary bg-card border border-border hover:border-slate-500 transition"
          >
            Go to Dashboard
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {reports.map((report) => (
            <button
              key={report._id}
              onClick={() => handleOnClickReport(report)}
              className="w-full flex items-center gap-4 px-5 py-4 rounded-xl bg-card border border-border hover:border-gradFrom/50 transition text-left"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradFrom/15 shrink-0">
                <FileText size={18} className="text-gradFrom" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate text-primary">
                  {report.title || "Untitled Report"}
                </p>
                <p className="text-xs text-muted">
                  {formatDate(report.createdAt)}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span
                  className={`text-lg font-bold ${scoreColor(report.matchScore)}`}>
                  {report.matchScore}
                </span>
                <span className="text-xs text-muted">/100</span>
              </div>

              <ChevronRight size={18} className="text-muted shrink-0" />
            </button>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
};

export default PreviousAnalyzed;
