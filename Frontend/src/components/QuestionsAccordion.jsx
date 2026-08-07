import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const QuestionsAccordion = ({ title, icon: Icon, questions = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="rounded-2xl bg-card border border-border p-6">
      <div className="flex items-center gap-2 mb-5">
        {Icon && <Icon size={18} className="text-primary" />}
        <h3 className="font-semibold text-primary">{title}</h3>
      </div>

      <div className="flex flex-col gap-3">
        {questions.length === 0 ? (
          <p className="text-sm text-muted">No questions available yet.</p>
        ) : (
          questions.map((q, i) => {
          const open = openIndex === i;
          return (
            <div
              key={i}
              className="rounded-lg border border-border bg-bg overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : i)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
              >
                <span className="text-sm font-medium text-primary">
                  {i + 1}. {q.question}
                </span>
                <ChevronDown
                  size={16}
                  className={`shrink-0 text-muted transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
                </button>

              {open && (
                <div className="px-4 pb-4 flex flex-col gap-3">
                  <div>
                    <p className="text-xs font-medium mb-1 text-primary">
                      Why it's asked
                    </p>
                    <p className="text-sm text-muted">{q.intention || q.intension}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium mb-1 text-success">
                      Sample answer
                    </p>
                    <p className="text-sm leading-relaxed text-muted">
                      {q.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
          })
        )}
      </div>
    </div>
  );
};

export default QuestionsAccordion;
