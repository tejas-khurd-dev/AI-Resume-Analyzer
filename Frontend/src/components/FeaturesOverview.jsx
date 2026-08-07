import React from "react";
import { features } from "../assets/assets";

const FeaturesOverview = () => {
  return (
    <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 max-w-7xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-3 text-primary">Powerful AI Analysis</h2>
      <p className="text-base mb-12 md:mb-14 max-w-xl mx-auto text-muted">
        We look beyond basic spell check to ensure your resume is perfectly
        tuned for the job you want.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-xl p-6 transition hover:-translate-y-1 bg-card border border-border"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-slate-700/60 border border-border">
              <Icon size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-primary">{title}</h3>
            <p className="text-sm leading-relaxed text-muted">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesOverview;
