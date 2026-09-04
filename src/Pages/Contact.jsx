import React, { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });


    const [submitted, setSubmitted] =
        useState(false);


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(
            "Customer enquiry:",
            formData
        );

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

    };


    return (
        <main className="min-h-screen bg-[#0d101b] text-white">

            {/* Header */}

            <section className="px-4 sm:px-6 lg:px-8 pt-28 pb-14">

                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-[#e7c27d] uppercase tracking-[0.3em] text-xs">
                        Get In Touch
                    </p>

                    <h1 className="font-serif text-4xl sm:text-5xl mt-4">
                        Contact Us
                    </h1>

                    <p className="text-white/50 leading-7 mt-5">
                        Have a question about a fragrance, your order,
                        or delivery? Our team would love to hear from you.
                    </p>

                </div>

            </section>


            {/* Contact Area */}

            <section className="px-4 sm:px-6 lg:px-8 pb-20">

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">


                    {/* Contact Information */}

                    <div>

                        <h2 className="font-serif text-3xl">
                            We'd love to hear from you
                        </h2>

                        <p className="text-white/50 leading-7 mt-4">
                            Whether you need help choosing your next
                            fragrance or have a question about delivery,
                            send us a message and we'll get back to you.
                        </p>


                        <div className="space-y-5 mt-8">


                            {/* Email */}

                            <div className="flex gap-4 items-start">

                                <div className="w-11 h-11 flex items-center justify-center bg-[#e7c27d] text-[#0d101b] rounded-lg">
                                    ✉
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        Email
                                    </h3>

                                    <p className="text-white/50 text-sm mt-1">
                                        hello@lizzyperfumes.com
                                    </p>

                                </div>

                            </div>


                            {/* Phone */}

                            <div className="flex gap-4 items-start">

                                <div className="w-11 h-11 flex items-center justify-center bg-[#e7c27d] text-[#0d101b] rounded-lg">
                                    ☎
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        Phone
                                    </h3>

                                    <p className="text-white/50 text-sm mt-1">
                                        +234 800 000 0000
                                    </p>

                                </div>

                            </div>


                            {/* Delivery */}

                            <div className="flex gap-4 items-start">

                                <div className="w-11 h-11 flex items-center justify-center bg-[#e7c27d] text-[#0d101b] rounded-lg">
                                    🚚
                                </div>

                                <div>

                                    <h3 className="font-semibold">
                                        Delivery Support
                                    </h3>

                                    <p className="text-white/50 text-sm mt-1">
                                        Nigeria and selected international destinations
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* Contact Form */}

                    <div className="bg-[#111522] border border-white/10 rounded-xl p-6 sm:p-8">

                        {submitted && (

                            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg">
                                Thank you! Your enquiry has been received.
                            </div>

                        )}


                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >


                            {/* Name */}

                            <div>

                                <label className="block text-sm text-white/70 mb-2">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full bg-[#0d101b] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e7c27d]"
                                />

                            </div>


                            {/* Email */}

                            <div>

                                <label className="block text-sm text-white/70 mb-2">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                    className="w-full bg-[#0d101b] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e7c27d]"
                                />

                            </div>


                            {/* Subject */}

                            <div>

                                <label className="block text-sm text-white/70 mb-2">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help?"
                                    className="w-full bg-[#0d101b] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e7c27d]"
                                />

                            </div>


                            {/* Message */}

                            <div>

                                <label className="block text-sm text-white/70 mb-2">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full bg-[#0d101b] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#e7c27d] resize-none"
                                />

                            </div>


                            {/* Submit */}

                            <button
                                type="submit"
                                className="w-full py-3 bg-[#e7c27d] text-[#0d101b] font-semibold rounded-lg hover:bg-[#f2d89e] transition"
                            >
                                Send Enquiry
                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default Contact;