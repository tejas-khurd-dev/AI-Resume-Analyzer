import React, { useRef, useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import toast from "react-hot-toast";
import axios from "axios";
import DashboardLayout from "../components/DashboardLayout";

const Dashboard = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [selfDescription, setSelfDescription] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please upload your resume (PDF)");
      return;
    }
    if (!selfDescription.trim() || !jobDescription.trim()) {
      toast.error("Please fill in self description and job description");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("selfDescription", selfDescription);
    formData.append("jobDescription", jobDescription);

    try {
      setLoading(true);
      const { data } = await axios.post("/api/interview-report", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      toast.success("Resume analyzed successfully!");
      console.log("report:", data);
      // e.g. navigate(`/dashboard/history/${data.data._id}`)
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.message || "Failed to analyze resume"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-2! text-primary">Dashboard</h1>
      <p className="text-sm mb-8! text-muted">
        Upload your resume to get an instant AI-powered analysis.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6!">
        {/* Upload card */}
        <div className="rounded-2xl border border-dashed border-border bg-card p-10! flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4! bg-gradFrom/15">
            <UploadCloud size={26} className="text-gradFrom" />
          </div>

          <h2 className="font-semibold mb-1! text-primary">Upload your resume</h2>
          <p className="text-sm mb-6! max-w-sm text-muted">
            PDF up to 5MB. We&apos;ll scan it against ATS standards and give
            you a match score.
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            className="hidden"
            onChange={handleFileChange}
          />

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-5! py-2.5! rounded-lg font-medium text-white bg-gradient-to-r from-gradFrom to-gradTo hover:opacity-90 transition"
          >
            <UploadCloud size={18} />
            {file ? "Change Resume" : "Upload Resume"}
          </button>

          {file && (
            <div className="flex items-center gap-2 mt-5! px-3! py-2! rounded-lg bg-bg border border-border text-sm text-primary">
              <FileText size={16} className="text-gradFrom" />
              {file.name}
              <button
                type="button"
                onClick={handleRemoveFile}
                className="text-muted hover:text-primary"
                aria-label="Remove file"
              >
                <X size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Self description */}
        <div>
          <label className="block text-sm font-medium mb-2! text-primary">
            Self Description
          </label>
          <textarea
            value={selfDescription}
            onChange={(e) => setSelfDescription(e.target.value)}
            rows={4}
            placeholder="Briefly describe your experience, strengths, and what you're looking for..."
            className="w-full px-4! py-3! rounded-lg bg-card border border-border text-primary text-sm placeholder:text-muted outline-none focus:border-gradFrom transition resize-none"
          />
        </div>

        {/* Job description */}
        <div>
          <label className="block text-sm font-medium mb-2! text-primary">
            Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows={6}
            placeholder="Paste the job description you're preparing for..."
            className="w-full px-4! py-3! rounded-lg bg-card border border-border text-primary text-sm placeholder:text-muted outline-none focus:border-gradFrom transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="self-start flex items-center gap-2 px-6! py-3! rounded-lg font-medium text-white bg-gradient-to-r from-gradFrom to-gradTo hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Analyzing..." : "Analyze Resume"}
        </button>
      </form>
    </DashboardLayout>
  );
};

export default Dashboard;