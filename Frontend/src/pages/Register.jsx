import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import AuthLayout from "../components/AuthLayout";
import { useAuth } from "../hooks/useAuth";
import Loading from "../components/Loading";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const { loading, handleSendOTP } = useAuth();

  const navigate = useNavigate()

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    handleSendOTP(form)
    navigate("/verify-otp", {
      state: {
        email: form.email,
      },
    });
  };

  if(loading){
    return <Loading/>
  }

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-2! text-primary">Create account</h2>
      <p className="text-sm mb-8! text-muted">
        Start optimizing your resume with AI in minutes.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5!">
        <div>
          <label className="block text-xs font-medium mb-2! text-muted">
            Username
          </label>
          <div className="relative">
            <User
              size={16}
              className="absolute left-3! top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="text"
              name="username"
              required
              value={form.username}
              onChange={handleChange}
              placeholder="janedoe"
              className="w-full pl-9! pr-3! py-2.5! rounded-lg bg-card border border-border text-primary text-sm placeholder:text-muted outline-none focus:border-gradFrom transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium mb-2! text-muted">
            Email address
          </label>
          <div className="relative">
            <Mail
              size={16}
              className="absolute left-3! top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="name@company.com"
              className="w-full pl-9! pr-3! py-2.5! rounded-lg bg-card border border-border text-primary text-sm placeholder:text-muted outline-none focus:border-gradFrom transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium mb-2! text-muted">
            Password
          </label>
          <div className="relative">
            <Lock
              size={16}
              className="absolute left-3! top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full pl-9! pr-9! py-2.5! rounded-lg bg-card border border-border text-primary text-sm placeholder:text-muted outline-none focus:border-gradFrom transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3! top-1/2 -translate-y-1/2 text-muted"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2.5! rounded-lg font-medium text-white bg-gradient-to-r from-gradFrom to-gradTo hover:opacity-90 transition mt-2!"
        >
          Create account
        </button>
      </form>

      <p className="text-sm text-center mt-6! text-muted">
        Already have an account?{" "}
        <a href="/login" className="text-primary font-medium hover:opacity-80">
          Log in
        </a>
      </p>
    </AuthLayout>
  );
};

export default Register;