"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const { user, setUser, logInUser, setLoading, googleSignIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        toast.success("Google registration successful");
        setUser(res.user);
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    logInUser(email, password)
      .then((res) => {
        toast.success("User Login Successful");
        setUser(res.user);
        setLoading(false);
        router.push("/");
      })
      .catch((err) => {
        toast.error("Please enter valid credentials");
        setLoading(false);
      });
  };

  const fillMockData = () => {
    setEmail("admin@courseverse.com");
    setPassword("123456");
    toast.info("Mock credentials filled!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="w-full max-w-md bg-gray-900/50 border border-gray-800 rounded-2xl p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl"></div>
        
        <h1 className="text-4xl font-bold text-center mb-2 text-white">Welcome Back</h1>
        <p className="text-gray-400 text-center mb-8">Enter your details to access your account</p>

        {/* Mock Login Fast Action */}
        <button
          onClick={fillMockData}
          className="w-full py-3 mb-6 flex items-center justify-center gap-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:bg-orange-500/20 transition-all duration-300 group"
        >
          <FaUserShield className="text-xl group-hover:scale-110 transition-transform" />
          <span className="font-semibold">Fill Mock Credentials</span>
        </button>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 mb-4 flex justify-center items-center gap-2 shadow-lg hover:shadow-white/10"
        >
          <FcGoogle className="text-2xl" />
          <span>Continue with Google</span>
        </button>

        <div className="flex items-center gap-4 my-8">
          <div className="flex-1 h-[1px] bg-gray-800"></div>
          <p className="text-gray-500 text-sm font-medium">OR EMAIL</p>
          <div className="flex-1 h-[1px] bg-gray-800"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSignIn} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-white placeholder:text-gray-600"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all text-white placeholder:text-gray-600"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 transform hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-8 mt-10">
          Don’t have an account?{" "}
          <a href="/register" className="text-orange-500 hover:underline font-semibold ml-1">
            Create account
          </a>
        </p>
      </div>
    </div>
  );
}

