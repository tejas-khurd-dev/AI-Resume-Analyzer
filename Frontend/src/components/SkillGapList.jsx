import React from "react";
import { AlertTriangle } from "lucide-react";

const severityStyles = {
  high: { text: "text-red-300", bg: "bg-red-500/10", border: "border-red-500/20" },
  medium: { text: "text-amber-300", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  low: { text: "text-emerald-300", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
};

const SkillGapList = ({ skills = [] }) => {
  return (
    <div className="rounded-2xl bg-card border border-border p-6">
      <div className="flex items-center gap-2 mb-5">
        <AlertTriangle size={18} className="text-primary" />
        <h3 className="font-semibold text-primary">Skill Gaps</h3>
      </div>

      <div className="flex flex-col gap-3">
        {skills.length === 0 ? (
          <p className="text-sm text-muted">No skill gaps identified yet.</p>
        ) : (
          skills.map((s, i) => {
          const style = severityStyles[s.severity] || severityStyles.medium;
          return (
            <div
              key={i}
              className={`flex items-center justify-between px-4 py-3 rounded-lg border ${style.bg} ${style.border}`}
            >
              <span className="text-sm font-medium text-primary">{s.skill}</span>
              <span
                className={`text-xs font-semibold uppercase tracking-wide ${style.text}`}
              >
                {s.severity}
              </span>
            </div>
          );
          })
        )}
      </div>
    </div>
  );
};

export default SkillGapList;
