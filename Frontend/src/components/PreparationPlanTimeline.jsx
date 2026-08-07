import React from "react";
import { CalendarCheck } from "lucide-react";

const PreparationPlanTimeline = ({ plan = [] }) => {
  return (
    <div className="rounded-2xl bg-card border border-border p-6">
      <div className="flex items-center gap-2 mb-5">
        <CalendarCheck size={18} className="text-primary" />
        <h3 className="font-semibold text-primary">Preparation Plan</h3>
      </div>

      <div className="flex flex-col gap-5">
        {plan.length === 0 ? (
          <p className="text-sm text-muted">No preparation steps available yet.</p>
        ) : (
          plan.map((item, i) => {
          const dayLabel = item.goal ?? item.day ?? i + 1;
          return (
            <div key={i} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold text-white bg-slate-700 border border-border shrink-0">
                  {dayLabel}
                </div>
                {i < plan.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>

              <div className="pb-5">
                <p className="text-sm font-semibold mb-2 text-primary">
                  {item.focus}
                </p>
                <ul className="flex flex-col gap-1">
                  {(item.tasks || []).map((task, ti) => (
                    <li
                      key={ti}
                      className="text-sm text-muted flex items-start gap-2"
                    >
                      <span className="text-gradFrom mt-1">•</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
          })
        )}
      </div>
    </div>
  );
};

export default PreparationPlanTimeline;
