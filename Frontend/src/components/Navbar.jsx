import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { logoIcon, navLinks } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { user, handleLogout } = useAuth();


  return (
    <nav className="w-full sticky top-0 z-20 bg-bg/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 md:py-5">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-left"
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-700/70 border border-border shrink-0">
            <img src={logoIcon} alt="" />
          </div>
          <span className="font-semibold text-lg text-primary">SkillSync AI</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={()=> navigate(`/${link.name}`)}
              className="text-sm text-muted hover:text-primary transition"
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          {user ? (
            <div onClick={()=> navigate('/settings')} className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-full bg-slate-700 border border-border flex items-center justify-center text-white font-semibold shrink-0">
                {user.username?.charAt(0).toUpperCase()}
              </div>

              <span className="font-medium text-primary max-w-[100px] lg:max-w-[160px] truncate">
                {user.username}
              </span>

              <button
                onClick={()=>{handleLogout(); navigate('/')}}
                className="text-sm text-red-400 hover:text-red-300 bg-red-500/10 rounded-full px-3 py-1.5 whitespace-nowrap border border-red-500/20"
              >
                Log out
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-sm font-medium text-primary hover:opacity-80 transition whitespace-nowrap"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="text-sm font-medium px-3 lg:px-4 py-2 rounded-lg text-primary bg-card border border-border hover:border-slate-500 transition whitespace-nowrap"
              >
                Get Started
              </button>
            </>
          )}
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 sm:px-6 pb-5 flex flex-col gap-4 border-t border-border bg-bg">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="text-left text-sm text-muted hover:text-primary transition pt-4"
            >
              {link.name}
            </button>
          ))}
          <div className="flex items-center gap-3 pt-1">
            {user ? (
              <button
                className="flex-1 text-sm font-medium py-2 rounded-lg text-red-300 border border-red-500/20 bg-red-500/10"
                onClick={handleLogout}
                type="button"
              >
                Log out
              </button>
            ) : (
              <>
                <button
                  className="flex-1 text-sm font-medium py-2 rounded-lg text-primary border border-border"
                  onClick={() => navigate("/login")}
                  type="button"
                >
                  Login
                </button>
                <button
                  className="flex-1 text-sm font-medium py-2 rounded-lg text-primary bg-card border border-border"
                  onClick={() => navigate("/register")}
                  type="button"
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
