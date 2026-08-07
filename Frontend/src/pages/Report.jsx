import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Code2, MessageSquare, ArrowLeft } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import MatchScoreRing from "../components/MatchScoreRing";
import QuestionsAccordion from "../components/QuestionsAccordion";
import SkillGapList from "../components/SkillGapList";
import PreparationPlanTimeline from "../components/PreparationPlanTimeline";
import { useReport } from "../hooks/useReport";
import Loading from "../components/Loading";

const Report = () => {
  const navigate = useNavigate();
  const { reportID } = useParams();

  const { report, handleGetReportByID } = useReport();

  useEffect(() => {
    if (reportID && report?._id !== reportID) {
      handleGetReportByID(reportID);
    }
  }, [handleGetReportByID, report?._id, reportID]);

  if (!reportID || !report || report?._id !== reportID) {
    return <Loading />;
  }

  const {
    matchScore,
    technicalQuestions,
    behavioralQuestions,
    skillGap,
    preparationPlan,
  } = report;


  


  return (
    <DashboardLayout>
      <button
        onClick={() => navigate("/dashboard")}
        className="flex items-center gap-2 text-sm text-muted hover:text-primary transition mb-6"
      >
        <ArrowLeft size={16} />
        Back to Dashboard
      </button>

      <div className="rounded-2xl bg-card border border-border p-6 flex flex-col sm:flex-row items-center gap-6 mb-8">
        <MatchScoreRing score={matchScore} />
        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-bold mb-1 text-primary">
            Your Resume Report
          </h1>
          <p className="text-sm text-muted">
            Here's how your resume matches this job description, along with
            tailored questions and a preparation plan.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <QuestionsAccordion
          title="Technical Questions"
          icon={Code2}
          questions={technicalQuestions}
        />

        <QuestionsAccordion
          title="Behavioral Questions"
          icon={MessageSquare}
          questions={behavioralQuestions}
        />

        <SkillGapList skills={skillGap} />

        <PreparationPlanTimeline plan={preparationPlan} />
      </div>
    </DashboardLayout>
  );
};

export default Report;
