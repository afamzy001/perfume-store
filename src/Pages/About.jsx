import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <main className="min-h-screen bg-[#0d101b] text-white">

            {/* Hero */}
            <section className="px-4 sm:px-6 lg:px-8 pt-28 pb-16">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        {/* Text */}
                        <div>

                            <p className="text-[#e7c27d] uppercase tracking-[0.3em] text-xs sm:text-sm">
                                About Lizzy Perfumes
                            </p>

                            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mt-4">
                                Discover the fragrance
                                that tells your story.
                            </h1>

                            <p className="text-white/60 leading-8 mt-6 max-w-xl">
                                At Lizzy Perfumes, we believe that fragrance
                                is more than just a scent. It is a personal
                                expression, a memory, and a way to make every
                                moment unforgettable.
                            </p>

                            <p className="text-white/60 leading-8 mt-4 max-w-xl">
                                We carefully curate elegant and captivating
                                fragrances for people who appreciate quality,
                                confidence, and individuality.
                            </p>

                            <Link
                                to="/shop"
                                className="inline-block mt-8 px-7 py-3 bg-[#e7c27d] text-[#0d101b] font-semibold hover:bg-[#f2d89e] transition"
                            >
                                Explore Our Collection
                            </Link>

                        </div>


                        {/* Image */}
                        <div className="relative">

                            <div className="absolute -inset-3 border border-[#e7c27d]/20 rounded-2xl" />

                            <img
                                src="/images/perfume-about.jpg"
                                alt="Luxury perfume collection"
                                className="relative w-full h-[450px] sm:h-[550px] object-cover rounded-xl"
                            />

                        </div>

                    </div>

                </div>
            </section>


            {/* Our Story */}
            <section className="bg-[#111522] px-4 sm:px-6 lg:px-8 py-20">

                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-[#e7c27d] uppercase tracking-[0.3em] text-xs">
                        Our Story
                    </p>

                    <h2 className="font-serif text-3xl sm:text-4xl mt-4">
                        A passion for unforgettable scents
                    </h2>

                    <p className="text-white/60 leading-8 mt-6">
                        Lizzy Perfumes was created with a simple vision:
                        to make beautiful and memorable fragrances accessible
                        to everyone. From timeless classics to modern
                        creations, every fragrance in our collection is
                        selected to help you express your unique personality.
                    </p>

                </div>

            </section>


            {/* Values */}
            <section className="px-4 sm:px-6 lg:px-8 py-20">

                <div className="max-w-7xl mx-auto">

                    <div className="text-center mb-12">

                        <p className="text-[#e7c27d] uppercase tracking-[0.3em] text-xs">
                            Why Choose Us
                        </p>

                        <h2 className="font-serif text-3xl sm:text-4xl mt-4">
                            The Lizzy Perfumes Experience
                        </h2>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="border border-white/10 bg-[#111522] p-7 rounded-xl">

                            <div className="text-3xl">
                                ✨
                            </div>

                            <h3 className="text-xl font-semibold mt-5">
                                Quality Fragrances
                            </h3>

                            <p className="text-white/50 leading-7 mt-3">
                                We carefully select fragrances that combine
                                beautiful scents with a premium experience.
                            </p>

                        </div>


                        {/* Card 2 */}
                        <div className="border border-white/10 bg-[#111522] p-7 rounded-xl">

                            <div className="text-3xl">
                                ❤️
                            </div>

                            <h3 className="text-xl font-semibold mt-5">
                                Customer First
                            </h3>

                            <p className="text-white/50 leading-7 mt-3">
                                Your satisfaction matters to us. We are
                                committed to making every shopping experience
                                simple and enjoyable.
                            </p>

                        </div>


                        {/* Card 3 */}
                        <div className="border border-white/10 bg-[#111522] p-7 rounded-xl">

                            <div className="text-3xl">
                                🌍
                            </div>

                            <h3 className="text-xl font-semibold mt-5">
                                Delivery Worldwide
                            </h3>

                            <p className="text-white/50 leading-7 mt-3">
                                Whether you are in Nigeria or anywhere around
                                the world, we are working to bring your
                                favourite fragrances closer to you.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default About;