import React from "react";
import { User, Mail, LogOut } from "lucide-react";
import DashboardLayout from "../components/DashboardLayout";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  
  const {user, handleLogout} = useAuth()

  const navigate = useNavigate()

  const afterLogout = async () => {
    await handleLogout()
    navigate('/')
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-2 text-primary">Settings</h1>
      <p className="text-sm mb-8 text-muted">
        Manage your account information.
      </p>

      <div className="rounded-2xl bg-card border border-border p-6 max-w-md w-full">
        <div className="flex items-center gap-4 pb-5 mb-5 border-b border-border">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-slate-700 border border-border text-white font-semibold">
            {(user?.username || "?").charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-medium text-primary">{user?.username}</p>
            <p className="text-xs text-muted">{user?.email}</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-medium mb-2 text-muted">
              Username
            </label>
            <div className="relative">
              <User
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                value={user?.username || ""}
                readOnly
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-bg border border-border text-primary text-sm outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium mb-2 text-muted">
              Email address
            </label>
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-bg border border-border text-primary text-sm outline-none"
              />
            </div>
          </div>
        </div>

        <button
          onClick={afterLogout}
          className="w-full flex items-center justify-center gap-2 mt-6 py-2.5 rounded-lg font-medium text-red-200 bg-red-500/10 border border-red-500/20 hover:bg-red-500/15 transition"
        >
          <LogOut size={16} />
          Log out
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
