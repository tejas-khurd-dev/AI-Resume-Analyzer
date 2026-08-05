import React from "react";
import { FileSearch } from "lucide-react";
import { trustBadge } from "../assets/assets";

const Hero = () => {
  return (
    <section className="relative px-4! sm:px-6! lg:px-8! pt-12! md:pt-20! pb-16! max-w-7xl mx-auto! overflow-hidden">
 
      <div className="absolute -top-24 right-0 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full bg-gradFrom/20 blur-3xl" />

      <div className="relative grid md:grid-cols-2 gap-10 md:gap-12 items-center">

        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6! text-primary">
            Get Your Resume Noticed by{" "}
            <span className="bg-gradient-to-r from-gradFrom to-gradTo bg-clip-text text-transparent">
              Recruiters
            </span>
          </h1>

          <p className="text-base leading-relaxed mb-8! max-w-md mx-auto! md:mx-0! text-muted">
            Our advanced AI analyzes your resume against industry standards,
            optimizing keywords and formatting to ensure you land more
            interviews. Stop guessing and start landing jobs.
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8!">
            <button className="flex items-center gap-2 px-5! py-3! rounded-lg font-medium text-white bg-gradient-to-r from-gradFrom to-gradTo hover:opacity-90 transition">
              <FileSearch size={18} />
              Analyze My Resume Free
            </button>
            <button className="px-5! py-3! rounded-lg font-medium text-primary border border-border bg-card hover:bg-border/40 transition">
              View Sample Score
            </button>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="flex -space-x-2!">
              {trustBadge.avatars.map((u) => (
                <img
                  key={u}
                  src={u}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium bg-card border-2 border-bg text-primary object-cover" 
                />
              ))}
            </div>
            <span className="text-sm text-muted">{trustBadge.text}</span>
          </div>
        </div>

  
        <div className="relative">
          <div className="rounded-2xl p-6! relative overflow-hidden min-h-[280px] md:min-h-[320px] bg-gradient-to-br from-card to-[#0F1120] border border-border">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gradTo/25 blur-2xl" />

            <div className="relative rounded-xl p-5! mx-auto! max-w-xs bg-bg border border-border">
              <div className="flex items-center gap-3 mb-4!">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gradFrom to-gradTo" />
                <div>
                  <div className="h-2 w-24 rounded mb-1! bg-border" />
                  <div className="h-2 w-16 rounded bg-border" />
                </div>
              </div>
              <div className="space-y-2! mb-4!">
                <div className="h-2 rounded w-full bg-border" />
                <div className="h-2 rounded w-5/6 bg-border" />
                <div className="h-2 rounded w-2/3 bg-border" />
              </div>
              <div className="rounded-lg p-3! flex items-center justify-between bg-card">
                <span className="text-xs text-muted">Match Score</span>
                <span className="text-sm font-semibold text-success">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;