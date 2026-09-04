import { Link } from "react-router-dom";


function Footer() {
    const currentYear = new Date().getFullYear();
    const whatsappNumber = "2349031576915";

    return (
        <footer className="bg-[#0d101b] text-white border-t border-white/10">

            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">

                    {/* BRAND */}
                    <div>
                        <Link
                            to="/"
                            className="inline-block text-2xl font-serif tracking-wide text-[#e7c27d]"
                        >
                            Lizzy Essence
                        </Link>

                        <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
                            Discover rich fragrances carefully selected
                            to bring comfort, confidence and effortless
                            elegance to your everyday life.
                        </p>

                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#e7c27d] px-5 py-3 text-sm font-semibold text-[#0d101b] transition hover:bg-[#f2d89e]"
                        >
                            {/* <MessageCircle size={17} /> */}
                            Chat with Lizzy
                        </a>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e7c27d]">
                            Quick Links
                        </h3>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link to="/" className="text-sm text-white/60 hover:text-[#e7c27d]">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/shop" className="text-sm text-white/60 hover:text-[#e7c27d]">
                                    Shop
                                </Link>
                            </li>

                            <li>
                                <Link to="/new-arrivals" className="text-sm text-white/60 hover:text-[#e7c27d]">
                                    New Arrivals
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="text-sm text-white/60 hover:text-[#e7c27d]">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="text-sm text-white/60 hover:text-[#e7c27d]">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SHOP */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e7c27d]">
                            Shop Collection
                        </h3>

                        <ul className="mt-6 space-y-4">
                            <li>
                                <Link
                                    to="/shop/men"
                                    className="text-sm text-white/60 hover:text-[#e7c27d]"
                                >
                                    Men's Fragrances
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop/women"
                                    className="text-sm text-white/60 hover:text-[#e7c27d]"
                                >
                                    Women's Fragrances
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop/unisex"
                                    className="text-sm text-white/60 hover:text-[#e7c27d]"
                                >
                                    Unisex Fragrances
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/new-arrivals"
                                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#e7c27d]"
                                >
                                    New Arrivals
                                    {/* <ArrowUpRight size={15} /> */}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#e7c27d]">
                            Contact
                        </h3>

                        <p className="mt-6 text-sm leading-7 text-white/50">
                            Have a question about a fragrance or your
                            order? Talk directly with us on WhatsApp.
                        </p>

                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e7c27d] hover:text-[#f2d89e]"
                        >

                            WhatsApp Us
                        </a>


                    </div>

                </div>

                <div className="my-10 h-px bg-white/10" />

                <div className="flex flex-col gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

                    <p className="text-xs text-white/40">
                        © {currentYear} Lizzy Essence. All rights reserved.
                    </p>

                    <div className="flex justify-center gap-5 sm:justify-end">
                        <Link
                            to="/privacy"
                            className="text-xs text-white/40 hover:text-[#e7c27d]"
                        >
                            Privacy
                        </Link>

                        <Link
                            to="/terms"
                            className="text-xs text-white/40 hover:text-[#e7c27d]"
                        >
                            Terms
                        </Link>

                        <Link
                            to="/contact"
                            className="text-xs text-white/40 hover:text-[#e7c27d]"
                        >
                            Contact
                        </Link>
                    </div>

                </div>

            </div>

        </footer>
    );
}

export default Footer;