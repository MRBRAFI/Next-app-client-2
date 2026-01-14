"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function Login() {
  const { user, setUser, signInUser, setLoading, googleSignIn } = useAuth();

  const router = useRouter();

  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("Account creation successful");
        router.push("/");
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Please enter valid credentials");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        toast.success("Google registration successful");
        setUser(res.user);
        router.push("/");
      })
      .catch(() => {});
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-xl p-8 shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Register</h1>
        {/* Google Login Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition mb-4"
        >
          <div className="flex justify-center items-center gap-2">
            <FcGoogle className="text-3xl"></FcGoogle>{" "}
            <span className="text-2xl font-bold">Continue with Google</span>
          </div>
        </button>

        <div className="flex items-center justify-between my-6">
          <span className="w-1/3 h-[px] bg-gray-700"></span>
          <p className="text-gray-400 text-sm">OR</p>
          <span className="w-1/3 h-[px] bg-gray-700"></span>
        </div>
        {/* Login Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-3 bg-[#0d0d0d] border border-gray-700 rounded-lg outline-none focus:border-gray-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-3 bg-[#0d0d0d] border border-gray-700 rounded-lg outline-none focus:border-gray-400"
          />

          <button
            type="submit"
            className="w-full py-3 bg-orange-500 hover:bg-orange-600 transition rounded-lg font-medium"
          >
            Register
          </button>
        </form>
        <p className="text-center text-gray-400 text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-orange-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
