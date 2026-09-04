import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import products from "../Data/products";

function CategoryPage({ category, title, description }) {

    const categoryProducts = products.filter(
        (product) => product.category === category
    );

    return (
        <main className="min-h-screen bg-[#0d101b] text-white">

            {/* ================= HERO ================= */}
            <section className="px-4 sm:px-6 lg:px-8 pt-28 pb-16">

                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-[#e7c27d] uppercase tracking-[0.3em] text-xs sm:text-sm">
                        Explore Our Collection
                    </p>

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4">
                        {title}
                    </h1>

                    <p className="text-white/50 max-w-2xl mx-auto leading-7 mt-5">
                        {description}
                    </p>

                </div>

            </section>


            {/* ================= PRODUCTS ================= */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">

                <div className="max-w-7xl mx-auto">

                    <div className="flex items-center justify-between mb-6">

                        <p className="text-white/50 text-sm">
                            {categoryProducts.length} fragrances
                        </p>

                        <Link
                            to="/shop"
                            className="text-[#e7c27d] text-sm hover:underline"
                        >
                            View All
                        </Link>

                    </div>


                    {categoryProducts.length > 0 ? (

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">

                            {categoryProducts.map((product) => (

                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />

                            ))}

                        </div>

                    ) : (

                        <div className="text-center py-20">

                            <div className="text-5xl mb-4">
                                🧴
                            </div>

                            <h2 className="text-xl font-serif">
                                No fragrances available
                            </h2>

                            <p className="text-white/50 text-sm mt-2">
                                New fragrances are coming soon.
                            </p>

                        </div>

                    )}

                </div>

            </section>

        </main>
    );
}

export default CategoryPage;

