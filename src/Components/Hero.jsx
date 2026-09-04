import { Link } from "react-router-dom";

function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#F8F6F2]">

            {/* Background Decoration */}
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#E8D8C3]/40 blur-3xl" />

            <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 lg:min-h-[720px] lg:px-8">

                {/* Left Content */}
                <div className="relative z-10 max-w-xl mt-4">

                    <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-[#B08D57]">
                        Discover Your Signature Scent
                    </p>

                    <h1 className="font-serif text-5xl leading-[1.05] text-neutral-900 sm:text-6xl lg:text-7xl">
                        The Art of
                        <br />
                        Fine Fragrance
                    </h1>

                    <p className="mt-7 max-w-md text-base leading-7 text-neutral-600">
                        Discover exceptional fragrances carefully selected to inspire
                        confidence, elegance, and unforgettable moments.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">

                        <Link
                            to="/shop"
                            className="bg-neutral-900 px-7 py-4 text-center text-sm font-medium uppercase tracking-wider text-white transition duration-300 hover:bg-[#B08D57]"
                        >
                            Shop Collection
                        </Link>

                        <Link
                            to="/new-arrivals"
                            className="border border-neutral-900 px-7 py-4 text-center text-sm font-medium uppercase tracking-wider text-neutral-900 transition duration-300 hover:bg-neutral-900 hover:text-white"
                        >
                            New Arrivals
                        </Link>

                    </div>

                    {/* Trust Text */}
                    <div className="mt-10 flex items-center gap-3">
                        <div className="h-px w-10 bg-[#B08D57]" />

                        <p className="text-xs uppercase tracking-wider text-neutral-500">
                            Curated Luxury. Timeless Impression.
                        </p>
                    </div>

                </div>

                {/* Right Image */}
                <div className="relative mt-5">

                    <div className="group overflow-hidden bg-[#E9E4DC]">

                        <img
                            src="https://images.unsplash.com/photo-1541643600914-78b084683601"
                            alt="Luxury perfume"
                            className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[550px] lg:h-[620px]"
                        />

                    </div>

                    {/* Badge */}
                    <div className="absolute bottom-0 left-0 translate-y-1/2 bg-white px-6 py-5 shadow-xl sm:left-8 sm:px-8">

                        <p className="font-serif text-2xl text-neutral-900">
                            Timeless
                        </p>

                        <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                            Luxury Fragrance
                        </p>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;