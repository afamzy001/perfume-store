import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


function Login() {

    const navigate = useNavigate();

    const {
        login,
    } = useAuth();


    const [email, setEmail] = useState("");

    const [password, setPassword] =
        useState("");

    const [error, setError] =
        useState("");


    const handleSubmit = (e) => {

        e.preventDefault();

        setError("");


        const result =
            login(
                email,
                password
            );


        if (!result.success) {

            setError(
                result.message
            );

            return;

        }


        navigate("/");

    };


    return (

        <main className="min-h-screen bg-[#0d101b] text-white px-5 py-20">

            <div className="max-w-md mx-auto">


                <div className="text-center mb-8">

                    <p className="text-[#e7c27d] uppercase tracking-[0.3em] text-xs">
                        Welcome Back
                    </p>

                    <h1 className="font-serif text-3xl sm:text-4xl mt-3">
                        Login
                    </h1>

                </div>


                <form
                    onSubmit={handleSubmit}
                    className="bg-[#111522] border border-white/10 rounded-xl p-6 sm:p-8"
                >


                    {/* Error */}

                    {error && (

                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 mb-5 rounded">
                            {error}
                        </div>

                    )}


                    {/* Email */}

                    <div className="mb-5">

                        <label className="block text-sm text-white/70 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(
                                    e.target.value
                                )
                            }
                            required
                            placeholder="Enter your email"
                            className="w-full bg-[#0d101b] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e7c27d]"
                        />

                    </div>


                    {/* Password */}

                    <div className="mb-6">

                        <label className="block text-sm text-white/70 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
                                    e.target.value
                                )
                            }
                            required
                            placeholder="Enter your password"
                            className="w-full bg-[#0d101b] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e7c27d]"
                        />

                    </div>


                    {/* Login */}

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#e7c27d] text-[#0d101b] font-semibold rounded-lg hover:bg-[#f2d89e] transition"
                    >
                        Login
                    </button>


                    {/* Register */}

                    <p className="text-center text-sm text-white/50 mt-6">

                        Don't have an account?

                        <Link
                            to="/register"
                            className="text-[#e7c27d] ml-1 hover:underline"
                        >
                            Create Account
                        </Link>

                    </p>

                </form>

            </div>

        </main>

    );

}

export default Login;