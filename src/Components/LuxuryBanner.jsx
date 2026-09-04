import { Link } from "react-router-dom";

function LuxuryBanner() {
    return (
        <section className="bg-[#1C1A18] py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 lg:px-8">

                {/* Image */}
                <div className="overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1594035910387-fea47794261f"
                        alt="Luxury perfume collection"
                        className="h-[450px] w-full object-cover transition duration-700 hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="max-w-xl">
                    <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#B08D57]">
                        Exclusive Collection
                    </p>

                    <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl">
                        Luxury in Every
                        <br />
                        Drop.
                    </h2>

                    <p className="mt-6 max-w-lg leading-7 text-neutral-400">
                        Explore our carefully selected collection of exceptional
                        fragrances created for those who appreciate elegance,
                        confidence, and timeless sophistication.
                    </p>

                    <Link
                        to="/shop"
                        className="mt-8 inline-block bg-[#B08D57] px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-white hover:text-neutral-900"
                    >
                        Explore Collection
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default LuxuryBanner;