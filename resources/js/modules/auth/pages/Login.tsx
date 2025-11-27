import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#f8f9fc] p-4">
            <div className="w-full max-w-md flex flex-col items-center">
                {/* Logo + Title */}
                <div className="flex flex-col items-center mb-8">
                    <svg
                        width="44"
                        height="44"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mb-5"
                    >
                        <rect width="40" height="40" rx="8" fill="#135bec" />
                        <path
                            d="M11.6667 20L17.5 25.8333L28.3333 15"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <h1 className="text-[28px] font-semibold text-[#0d121b] text-center">
                        Log in to your account
                    </h1>
                </div>

                {/* Card */}
                <div className="bg-white shadow-sm rounded-xl w-full p-7">
                    <form className="flex flex-col gap-5">
                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-[14px] font-medium text-[#0d121b] mb-1">
                                Email or Username
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your email or username"
                                className="border border-[#d5dceb] h-12 rounded-lg px-4 text-[15px] placeholder:text-[#8d9bb9] focus:ring-2 focus:ring-[#135bec33] outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col">
                            <label className="text-[14px] font-medium text-[#0d121b] mb-1">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="border border-[#d5dceb] h-12 rounded-lg w-full px-4 pr-12 text-[15px] placeholder:text-[#8d9bb9] focus:ring-2 focus:ring-[#135bec33] outline-none"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#8d9bb9]"
                                >
                                    <span className="material-symbols-outlined text-[20px]">
                                        visibility
                                    </span>
                                </button>
                            </div>
                        </div>

                        <div className="flex justify-end mt-[-4px]">
                            <a
                                href="#"
                                className="text-sm text-[#135bec] hover:underline font-medium"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full h-12 bg-[#135bec] text-white rounded-lg text-[16px] font-medium hover:bg-[#0f4ecc] transition"
                        >
                            Log In
                        </button>
                    </form>

                    <div className="text-center mt-6">
                        <p className="text-sm text-[#7b8ab1]">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-[#135bec] font-medium hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer links */}
                <div className="flex justify-center gap-6 mt-8">
                    <a
                        href="#"
                        className="text-[12px] text-[#7b8ab1] hover:text-[#135bec]"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#"
                        className="text-[12px] text-[#7b8ab1] hover:text-[#135bec]"
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Login;
