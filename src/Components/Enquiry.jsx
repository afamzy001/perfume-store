import { useState } from "react";

function Enquiry() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Enquiry submitted:", formData);

        alert("Thank you! Your enquiry has been received.");

        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
    };

    return (
        <section className="bg-white py-20">
            <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">

                {/* Left Content */}
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#B08D57]">
                        Get In Touch
                    </p>

                    <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
                        We'd Love To
                        <br />
                        Hear From You.
                    </h2>

                    <p className="mt-6 max-w-lg leading-7 text-neutral-600">
                        Have a question about a fragrance, your order, or our
                        collection? Send us a message and our team will be happy
                        to assist you.
                    </p>

                    <div className="mt-10 space-y-5 text-sm text-neutral-600">
                        <div>
                            <p className="font-medium text-neutral-900">
                                Email
                            </p>

                            <p className="mt-1">
                                Lizzyperfume@gmail.com
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-neutral-900">
                                Phone
                            </p>

                            <p className="mt-1">
                                2349031576915
                            </p>
                        </div>

                        <div>
                            <p className="font-medium text-neutral-900">
                                Location
                            </p>

                            <p className="mt-1">
                                Nigeria
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="border border-neutral-200 bg-[#F8F6F2] p-6 md:p-10"
                >
                    <div className="grid gap-5 md:grid-cols-2">

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="border border-neutral-300 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#B08D57]"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border border-neutral-300 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#B08D57]"
                        />

                    </div>

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-5 w-full border border-neutral-300 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#B08D57]"
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-5 w-full border border-neutral-300 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#B08D57]"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-5 w-full resize-none border border-neutral-300 bg-white px-4 py-4 text-sm outline-none transition focus:border-[#B08D57]"
                    />

                    <button
                        type="submit"
                        className="mt-5 w-full bg-neutral-900 py-4 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-[#B08D57]"
                    >
                        Send Enquiry
                    </button>

                </form>

            </div>
        </section>
    );
}

export default Enquiry;