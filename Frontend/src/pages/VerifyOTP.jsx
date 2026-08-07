import React, { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Loading from "../components/Loading";
import { useAuth } from "../hooks/useAuth";
import toast from "react-hot-toast";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");

  const { loading, handleRegistration } = useAuth();

  const navigate = useNavigate();
  const { state } = useLocation();

  const email = state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email not found. Please register again.");
        navigate("/register");
        return;
    }

    const user = await handleRegistration({
      email,
      otp,
    });

    if (user) {
      toast.success("Account created successfully");
      navigate("/dashboard");
    }
    };

  if (loading) {
    return <Loading />;
  }

  return (
    <AuthLayout>
      <h2 className="text-2xl font-bold mb-2 text-primary">
        Verify OTP
      </h2>

      <p className="text-sm mb-8 text-muted">
        Enter the 6-digit code sent to
        <br />
        <span className="font-medium text-primary">{email}</span>
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="block text-xs font-medium mb-2 text-muted">
            OTP
          </label>

          <div className="relative">
            <ShieldCheck
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />

            <input
              type="text"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-card border border-border text-primary text-sm placeholder:text-muted outline-none focus:border-gradFrom transition"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2.5 rounded-lg font-medium text-primary bg-card border border-border hover:border-slate-500 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Verify OTP
        </button>
      </form>
    </AuthLayout>
  );
};

export default VerifyOTP;
