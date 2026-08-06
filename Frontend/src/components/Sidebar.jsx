import React from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, History, Settings, X } from "lucide-react";
import { logoIcon as LogoIcon, sideItems } from "../assets/assets";
import { useState } from "react";


const Sidebar = ({ open, onClose }) => {

  const [isActive, setIsActive] = useState("Dashboard")

  const navigate = useNavigate()

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
        className={`fixed md:sticky top-0 left-0 h-screen w-64 shrink-0 bg-card border-r border-border p-5! z-40 flex flex-col transition-transform duration-200 md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"} `}
      >

        <button className="md:hidden text-muted flex items-center  justify-end !mb-8" onClick={onClose}>
          <X size={20} />
        </button>


        <nav className="flex flex-col gap-1!">
          {sideItems.map(({ name, to, icon: Icon }) => (
            <button key={name} onClick={()=>{setIsActive(name); navigate(to); onClose(); }} className={`flex items-center gap-3 px-3! py-2.5! rounded-lg text-sm font-medium transition ${isActive === name ? "bg-gradFrom/15 text-primary" : "text-muted hover:bg-card hover:text-primary"}`}>
              <Icon size={18} />
              {name}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;