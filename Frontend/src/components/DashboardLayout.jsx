import React, { useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden md:block">
        <Navbar />
      </div>
      
      <div className="min-h-screen flex bg-bg">
        <Sidebar open={open} onClose={() => setOpen(false)} />

        <div className="flex-1 min-w-0">
    
          <div className="md:hidden flex items-center justify-between px-4! py-4! border-b border-border bg-bg sticky top-0 z-20">
            <span className="font-semibold text-primary">ResumeAI</span>
            <button
              className="text-primary"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>

          <main className="px-4! sm:px-6! lg:px-10! py-8! md:py-10! max-w-5xl mx-auto!">
            {children}
          </main>
        </div>
      </div>
    </>
    
  );
};

export default DashboardLayout;