import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Components/ProductCard";
import products from "../Data/products";

function NewArrivals() {

    // For now, show the first 4 products
    // Later, we can add a "newArrival: true"
    // property to our product data.

    const newProducts = products.slice(0, 4);


    return (
        <main className="min-h-screen bg-[#0d101b] text-white">

            {/* Hero */}
            <section className="px-4 sm:px-6 lg:px-8 pt-28 pb-16">

                <div className="max-w-7xl mx-auto text-center">

                    <p className="text-[#e7c27d] uppercase tracking-[0.3em] text-xs sm:text-sm">
                        Just Arrived
                    </p>

                    <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-4">
                        New Arrivals
                    </h1>

                    <p className="text-white/50 max-w-2xl mx-auto leading-7 mt-5">
                        Discover our latest fragrance additions,
                        carefully selected for those who love to
                        stand out with a beautiful signature scent.
                    </p>

                </div>

            </section>


            {/* Products */}
            <section className="px-4 sm:px-6 lg:px-8 pb-20">

                <div className="max-w-7xl mx-auto">

                    {newProducts.length > 0 ? (

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">

                            {newProducts.map((product) => (

                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />

                            ))}

                        </div>

                    ) : (

                        <div className="text-center py-20">

                            <p className="text-white/50">
                                New arrivals coming soon.
                            </p>

                        </div>

                    )}


                    {/* Shop All */}

                    <div className="text-center mt-12">

                        <Link
                            to="/shop"
                            className="inline-block px-8 py-3 border border-[#e7c27d] text-[#e7c27d] hover:bg-[#e7c27d] hover:text-[#0d101b] transition"
                        >
                            View All Fragrances
                        </Link>

                    </div>

                </div>

            </section>

        </main>
    );
}

export default NewArrivals;