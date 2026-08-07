import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { sideItems } from "../assets/assets";


const Sidebar = ({ open, onClose }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 shrink-0 bg-card border-r border-border p-5 z-40 flex flex-col transition-transform duration-200 md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <button
          className="md:hidden text-muted flex items-center justify-end mb-8"
          onClick={onClose}
          type="button"
        >
          <X size={20} />
        </button>

        <nav className="flex flex-col gap-1">
          {sideItems.map(({ name, to, icon: Icon }) => {
            const active = pathname === to;
            return (
              <button
                key={name}
                onClick={() => {
                  navigate(to);
                  onClose();
                }}
                type="button"
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  active
                    ? "bg-slate-700/60 text-primary border border-border"
                    : "text-muted hover:bg-bg hover:text-primary"
                }`}
              >
              <Icon size={18} />
              {name}
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
