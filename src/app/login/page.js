"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/api/auth";
import Toaster from "@/Components/Toaster/Toaster";

export default function Component() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMessage, setToasterMessage] = useState("");
  const [toasterType, setToasterType] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const data = await login(formData, setError, setIsLoading);
      if (data.hasOwnProperty('message')) {
        setToasterMessage(data.message);
        setToasterType("error");
        setShowToaster(true);
      } else {
        router.push("/dashboard");
        setToasterMessage("Logged in successfully!");
        setToasterType("success");
        setShowToaster(true);
      }
    } catch (err) {
      setError(err.message);
      console.error("Error during login:", err);
      setToasterMessage(err.message);
      setToasterType("error");
      setShowToaster(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col relative overflow-hidden">
      {showToaster && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <Toaster message={toasterMessage} type={toasterType} />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Logo */}
        <div className="mb-[3rem]">
          <Link href="/" className="inline-flex items-center">
            <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border-4 border-white" />
            </div>
            <span className="ml-4 text-6xl font-bold text-black">Investz</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-7xl mx-auto">
          {/* Left Side */}
          <div className="flex flex-col items-center w-1/2">
            <div className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-900 text-sm font-medium mb-6">
              INTELLIGENT STOCK FORECASTING
            </div>
            <h1 className="text-4xl lg:text-[46px] font-medium text-black mb-8 text-center leading-[3rem]">
              POWERED BY DATA AND AI. FROM MARKET EXPERTS TO YOU.
              <span className="ml-2 inline-flex">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-full ml-[-4px]"
                    style={{
                      backgroundColor: `rgba(52, 211, 153, ${0.4 + i * 0.2})`,
                    }}
                  />
                ))}
              </span>
            </h1>
            <div className="text-black mb-1 text-xs">
              Don't have an Account?
            </div>
            <Link
              href="/signup"
              className="inline-flex text-2xl items-center text-black font-semibold hover:text-green-600 transition-colors"
            >
              Create Account
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>

            {/* About Section */}
            <div
              style={{
                backgroundImage: "url('/assets/login/about_bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="flex items-center justify-center p-8 h-fit mt-10 rounded-3xl"
            >
              <div className="px-8 py-12 rounded-3xl bg-gray-200/30 backdrop-blur items-center flex flex-col">
                <div className="inline-block px-6 py-2 rounded-full bg-gray-200 text-black mb-4">
                  About Us
                </div>
                <p className="text-gray-200 text-lg leading-relaxed px-12 text-center">
                  Over 100,000 daily predictions backed by AI, driven by
                  financial experts and innovative technology to keep you ahead
                  in the market.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div
            className="w-1/2 px-10 py-20 rounded-3xl"
            style={{
              backgroundImage: "url('/assets/login/account_bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="p-8 rounded-3xl bg-green-900 bg-opacity-30 backdrop-blur">
              <h2 className="text-2xl font-semibold text-white mb-2 text-center">
                Login To your account
              </h2>
              <p className="text-gray-300 text-center mb-8">
                Let's get back to business
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="username" className="block text-white mb-2">
                    Username
                  </label>
                  <input
                    id="username"
                    type="text"
                    placeholder="Abc@gmail.com"
                    className="w-full px-4 py-3 rounded-lg bg-green-100/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.username}
                    onChange={(e) =>
                      setFormData({ ...formData, username: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-white mb-2">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full px-4 py-3 rounded-lg bg-green-100/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded bg-green-100/20 border-transparent focus:ring-2 focus:ring-green-500"
                      checked={formData.rememberMe}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          rememberMe: e.target.checked,
                        })
                      }
                    />
                    <span className="ml-2 text-white">Remember Me</span>
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-white hover:text-green-400 transition-colors"
                  >
                    Forgot your Password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors"
                >
                  Log In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}