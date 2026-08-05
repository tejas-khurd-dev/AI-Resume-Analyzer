import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { logoIcon as LogoIcon, navLinks } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate()

  const {user, handleLogout} = useAuth()

  return (
    <nav className="w-full sticky top-0 z-20 bg-bg border-b border-border">
      <div className="max-w-7xl mx-auto! flex items-center justify-between px-4! sm:px-6! lg:px-8! py-4! md:py-5!">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-r from-gradFrom to-gradTo shrink-0">
            <LogoIcon size={18} className="text-white" />
          </div>
          <span className="font-semibold text-lg text-primary">ResumeAI</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-muted hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          {user ? (
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-gradFrom to-gradTo flex items-center justify-center text-white font-semibold shrink-0">
                {user.username?.charAt(0).toUpperCase()}
              </div>

              <span className="font-medium text-primary max-w-[100px] lg:max-w-[160px] truncate">
                {user.username}
              </span>

              <button
                onClick={handleLogout}
                className="text-sm text-red-500 hover:text-red-600 bg-gray-400/10 rounded-2xl px-3! py-1.5! whitespace-nowrap"
              >
                logout
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
                className="text-sm font-medium px-3! lg:px-4! py-2! rounded-lg text-white bg-gradient-to-r from-gradFrom to-gradTo hover:opacity-90 transition whitespace-nowrap"
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
        <div className="md:hidden px-4! sm:px-6! pb-5! flex flex-col gap-4 border-t border-border">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted hover:text-primary transition pt-4!"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-1!">
            <button className="flex-1 text-sm font-medium py-2! rounded-lg text-primary border border-border">
              Login
            </button>
            <button className="flex-1 text-sm font-medium py-2! rounded-lg text-white bg-gradient-to-r from-gradFrom to-gradTo">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;