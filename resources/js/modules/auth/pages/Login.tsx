import React from 'react';
const Login = () => {
    return (
        <div className="font-display bg-background-light dark:bg-background-dark">
            <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-background-light dark:bg-background-dark p-4 sm:p-6">
                <div className="w-full max-w-md">
                    {/* Logo + Title */}
                    <div className="flex flex-col items-center justify-center pb-8">
                        <svg
                            className="mb-4"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
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

                        <h1 className="text-[#0d121b] dark:text-white tracking-light text-2xl sm:text-3xl font-bold leading-tight text-center">
                            Log in to your account
                        </h1>
                    </div>

                    {/* Card */}
                    <div className="w-full bg-white dark:bg-[#1C2433] rounded-xl shadow-sm p-6 sm:p-8">
                        <form className="flex flex-col gap-4">
                            {/* Email */}
                            <label className="flex flex-col w-full">
                                <p className="text-[#0d121b] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                    Email or Username
                                </p>
                                <input
                                    type="text"
                                    placeholder="Enter your email or username"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d121b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfd7e7] dark:border-gray-600 bg-background-light dark:bg-background-dark h-12 placeholder:text-[#4c669a] dark:placeholder:text-gray-400 px-4 text-base font-normal leading-normal"
                                />
                            </label>

                            {/* Password */}
                            <label className="flex flex-col w-full">
                                <p className="text-[#0d121b] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                    Password
                                </p>
                                <div className="relative flex w-full items-stretch">
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d121b] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfd7e7] dark:border-gray-600 bg-background-light dark:bg-background-dark h-12 placeholder:text-[#4c669a] dark:placeholder:text-gray-400 pl-4 pr-12 text-base font-normal leading-normal"
                                    />
                                    <button
                                        type="button"
                                        aria-label="Toggle password visibility"
                                        className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#4c669a] dark:text-gray-400"
                                    >
                                        <span className="material-symbols-outlined">visibility</span>
                                    </button>
                                </div>
                            </label>

                            <div className="flex justify-end pt-1">
                                <a
                                    href="#"
                                    className="text-primary text-sm font-medium leading-normal hover:underline"
                                >
                                    Forgot password?
                                </a>
                            </div>

                            <button className="flex items-center justify-center w-full h-12 px-6 bg-primary text-white rounded-lg text-base font-medium leading-normal mt-4 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark">
                                Log In
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-[#4c669a] dark:text-gray-400 text-sm font-normal leading-normal">
                                Don't have an account?{" "}
                                <a href="#" className="font-medium text-primary hover:underline">
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Footer links */}
                    <div className="flex justify-center gap-6 pt-8">
                        <a className="text-xs text-[#4c669a] dark:text-gray-500 hover:text-primary dark:hover:text-primary" href="#">
                            Terms of Service
                        </a>
                        <a className="text-xs text-[#4c669a] dark:text-gray-500 hover:text-primary dark:hover:text-primary" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;