import React, { useRef, useState } from "react";
import { UploadCloud, FileText } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";

const Dashboard = () => {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
    // wire this up to your resume-analysis API
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-2! text-primary">Dashboard</h1>
      <p className="text-sm mb-8! text-muted">
        Upload your resume to get an instant AI-powered analysis.
      </p>

      <div className="rounded-2xl border border-dashed border-border bg-card p-10! flex flex-col items-center justify-center text-center">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4! bg-gradFrom/15">
          <UploadCloud size={26} className="text-gradFrom" />
        </div>

        <h2 className="font-semibold mb-1! text-primary">Upload your resume</h2>
        <p className="text-sm mb-6! max-w-sm text-muted">
          PDF or DOCX, up to 5MB. We&apos;ll scan it against ATS standards and
          give you a match score.
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={handleFileChange}
        />

        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-5! py-2.5! rounded-lg font-medium text-white bg-gradient-to-r from-gradFrom to-gradTo hover:opacity-90 transition"
        >
          <UploadCloud size={18} />
          Upload Resume
        </button>

        {fileName && (
          <div className="flex items-center gap-2 mt-5! px-3! py-2! rounded-lg bg-bg border border-border text-sm text-primary">
            <FileText size={16} className="text-gradFrom" />
            {fileName}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;