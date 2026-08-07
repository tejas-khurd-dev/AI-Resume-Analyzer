import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../hooks/useAuth.js";
import Loading from "../components/Loading.jsx";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const {loading, handleLogin} = useAuth()

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await handleLogin(form);

    if (user) {
      toast.success("Logged in successfully");
      navigate("/dashboard");
    }
  }

  if(loading){
    return <Loading/>
  }

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-2 text-primary">Welcome back</h2>
      <p className="text-sm mb-8 text-muted">
        Sign in to continue to your dashboard.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-card border border-border text-primary text-sm placeholder:text-muted outline-none focus:border-gradFrom transition"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-medium text-muted">
              Password
            </label>
          </div>
          <div className="relative">
            <Lock
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-9 pr-9 py-2.5 rounded-lg bg-card border border-border text-primary text-sm placeholder:text-muted outline-none focus:border-gradFrom transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-lg font-medium text-primary bg-card border border-border hover:border-slate-500 transition mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Log in
        </button>
      </form>

      <p className="text-sm text-center mt-6 text-muted">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="text-primary font-medium hover:opacity-80">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;
