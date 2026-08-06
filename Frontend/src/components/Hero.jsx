import React from "react";
import { FileSearch } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

const Hero = () => {

  const navigate = useNavigate()

  const {user} = useAuth()

  const handleDashboard = ()=>{
    if(!user) return toast("Login to use this feature")
    else {
      navigate('/dashboard');
      scroll(0,0)
    }
  }

  return (
    <section className="px-4! sm:px-6! lg:px-8! pt-12! md:pt-20! pb-16! max-w-7xl mx-auto!">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6! text-primary">
            Get your resume noticed by{" "}
            <span className="text-gradFrom">recruiters</span>
          </h1>

          <p className="text-base leading-relaxed mb-8! max-w-md mx-auto! md:mx-0! text-muted">
            We score your resume against the same keyword and formatting
            checks recruiters and ATS software use, then show you exactly
            what to fix.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8!">
            <button onClick={handleDashboard} className="flex items-center gap-2 px-5! py-3! rounded-lg font-medium text-white bg-gradFrom hover:bg-gradTo transition">
              <FileSearch size={18} />
              Analyze my resume free
            </button>
            <button className="px-5! py-3! rounded-lg font-medium text-primary border border-border hover:bg-card transition">
              See a sample score
            </button>
          </div>

          <p className="text-sm text-muted">
            12,400 resumes scored this month — average score improved by 31 points.
          </p>
        </div>

        <div className="rounded-2xl p-6! border border-border bg-card">
          <div className="rounded-lg p-5! bg-bg border border-border font-mono text-xs leading-relaxed">
            <p className="text-primary font-semibold mb-3!">Priya Nair — Product Designer</p>

            <p className="text-muted mb-1!">EXPERIENCE</p>
            <p className="text-primary mb-1!">
              Led redesign of onboarding flow,{" "}
              <span className="bg-gradFrom/20 text-gradFrom px-1! rounded">
                increasing activation 18%
              </span>
            </p>
            <p className="text-muted mb-3!">Senior Product Designer, Nimbus Co.</p>

            <p className="text-muted mb-1!">SKILLS</p>
            <p className="text-primary mb-3!">
              Figma, User Research,{" "}
              <span className="bg-gradFrom/20 text-gradFrom px-1! rounded">
                A/B Testing
              </span>
              , Design Systems
            </p>

            <div className="flex items-center justify-between pt-3! border-t border-border">
              <span className="text-muted">3 keyword matches found</span>
              <span className="text-success font-semibold">Score: 92</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;