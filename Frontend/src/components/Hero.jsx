import React from "react";
import { FileSearch } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

const Hero = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const handleDashboard = () => {
    if (!user) {
      toast("Login to use this feature");
      return;
    }

    navigate("/dashboard");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-12 md:pt-20 pb-16 max-w-7xl mx-auto" id="top">
      <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">

        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-primary">
            Get your resume noticed by recruiters
          </h1>

          <p className="text-base leading-relaxed mb-8 max-w-md mx-auto md:mx-0 text-muted">
            We score your resume against the same keyword and formatting
            checks recruiters and ATS software use, then show you exactly
            what to fix.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
            <button
              onClick={handleDashboard}
              className="flex items-center gap-2 px-5 py-3 rounded-lg font-medium text-primary bg-card border border-border hover:border-slate-500 transition"
            >
              <FileSearch size={18} />
              Analyze my resume free
            </button>
            <button
              onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="px-5 py-3 rounded-lg font-medium text-muted border border-border hover:text-primary hover:bg-card transition"
            >
              See how it works
            </button>
          </div>

          <p className="text-sm text-muted">
            12,400 resumes scored this month — average score improved by 31 points.
          </p>
        </div>

        <div className="rounded-2xl p-5 sm:p-6 border border-border bg-card">
          <div className="rounded-xl p-5 bg-bg border border-border text-sm leading-relaxed">
            <div className="flex items-center justify-between gap-3 mb-4">
              <p className="text-primary font-semibold">Tejas Khurd</p>
              <span className="text-xs text-muted">MERN Stack Developer</span>
            </div>

            <p className="text-muted mb-1">EXPERIENCE</p>
            <p className="text-primary mb-1">
              Built a full-stack resume analyzer,{" "}
              <span className="bg-slate-700/50 text-primary px-1 rounded">
                matching resumes to job roles with 90%+ accuracy
              </span>
            </p>
            <p className="text-muted mb-3">MERN Stack Developer, Personal Projects</p>

            <p className="text-muted mb-1">SKILLS</p>
            <p className="text-primary mb-3">
              React.js, Node.js,{" "}
              <span className="bg-slate-700/50 text-primary px-1 rounded">
                MongoDB
              </span>
              , Express.js, Data Structures
            </p>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border">
              <span className="text-muted">4 keyword matches found</span>
              <span className="text-success font-semibold">Score: 92</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
