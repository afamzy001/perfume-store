import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";


function Register() {

    const navigate = useNavigate();

    const {
        register,
    } = useAuth();


    const [formData, setFormData] = useState({

        name: "",
        email: "",
        password: "",
        confirmPassword: "",

    });


    const [error, setError] = useState("");


    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
                e.target.value,

        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        setError("");


        // Check passwords

        if (
            formData.password !==
            formData.confirmPassword
        ) {

            setError(
                "Passwords do not match."
            );

            return;

        }


        // Register

        const result = register({

            name: formData.name,

            email: formData.email,

            password: formData.password,

        });


        if (!result.success) {

            setError(result.message);

            return;

        }


        // Go home

        navigate("/");

    };


    return (

        <main className="min-h-screen bg-[#0d101b] text-white px-5 py-20">

            <div className="max-w-md mx-auto">


                {/* Header */}

                <div className="text-center mb-8">

                    <p className="text-[#e7c27d] uppercase tracking-[0.3em] text-xs">
                        Welcome to Lizzy Perfumes
                    </p>

                    <h1 className="font-serif text-3xl sm:text-4xl mt-3">
                        Create Account
                    </h1>

                    <p className="text-white/50 text-sm mt-3">
                        Join us and discover your signature scent.
                    </p>

                </div>


                {/* Form */}

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


                    {/* Name */}

                    <div className="mb-5">

                        <label className="block text-sm text-white/70 mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your full name"
                            className="w-full bg-[#0d101b] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e7c27d]"
                        />

                    </div>


                    {/* Email */}

                    <div className="mb-5">

                        <label className="block text-sm text-white/70 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                            className="w-full bg-[#0d101b] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e7c27d]"
                        />

                    </div>


                    {/* Password */}

                    <div className="mb-5">

                        <label className="block text-sm text-white/70 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            minLength={6}
                            placeholder="Create a password"
                            className="w-full bg-[#0d101b] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e7c27d]"
                        />

                    </div>


                    {/* Confirm Password */}

                    <div className="mb-6">

                        <label className="block text-sm text-white/70 mb-2">
                            Confirm Password
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder="Confirm your password"
                            className="w-full bg-[#0d101b] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e7c27d]"
                        />

                    </div>


                    {/* Submit */}

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#e7c27d] text-[#0d101b] font-semibold rounded-lg hover:bg-[#f2d89e] transition"
                    >
                        Create Account
                    </button>


                    {/* Login */}

                    <p className="text-center text-sm text-white/50 mt-6">

                        Already have an account?

                        <Link
                            to="/login"
                            className="text-[#e7c27d] ml-1 hover:underline"
                        >
                            Login
                        </Link>

                    </p>

                </form>

            </div>

        </main>

    );

}

export default Register;