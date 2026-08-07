import React from "react";
import { trustBadge, logoIcon } from "../assets/assets";
import loginBannerImage from "../assets/loginBannerImage.png";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex bg-bg">
      <div className="hidden md:flex md:w-1/2 flex-col justify-between p-10 bg-card border-r border-border">
        <div>
          <div onClick={()=> navigate('/')} className="flex items-center gap-2 mb-10 cursor-pointer">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-slate-700 border border-border shrink-0">
              <img src={logoIcon} alt="" />
            </div>
            <span className="font-semibold text-lg text-primary">ResumeAI</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight mb-4 text-primary max-w-sm">
            Land your dream job faster with AI.
          </h1>
          <p className="text-sm leading-relaxed text-muted max-w-sm">
            Automated resume analysis, ATS optimization, and personalized
            feedback powered by advanced AI.
          </p>
        </div>

        <img
          src={loginBannerImage}
          alt=""
          className="object-cover rounded-2xl h-[25rem] border border-border"
        />

        <div className="flex items-center justify-center md:justify-start gap-3">
          <div className="flex -space-x-2">
            {trustBadge.avatars.map((u) => (
              <img
                key={u}
                src={u}
                alt=""
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium bg-card border-2 border-bg text-primary object-cover"
              />
            ))}
          </div>
          <span className="text-sm text-muted">{trustBadge.text}</span>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
