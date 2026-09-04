import React from "react";
import { Link } from "react-router-dom";
import { useWishlist } from "../Context/WishlistContext";

import { useCart } from "../Context/CartContext";


function Wishlist() {

    const { wishlist, removeFromWishlist, clearWishlist, } = useWishlist();


    const { addToCart } = useCart();


    // Empty Wishlist

    if (wishlist.length === 0) {

        return (

            <main className="min-h-screen bg-[#0d101b] text-white px-5 py-24">

                <div className="max-w-3xl mx-auto text-center">

                    <div className="text-6xl mb-5">
                        ♡
                    </div>

                    <h1 className="text-3xl font-serif">
                        Your Wishlist Is Empty
                    </h1>

                    <p className="text-white/50 mt-3">
                        Save your favourite fragrances here.
                    </p>

                    <Link
                        to="/shop"
                        className="inline-block mt-7 px-7 py-3 bg-[#e7c27d] text-[#0d101b] font-semibold"
                    >
                        Explore Fragrances
                    </Link>

                </div>

            </main>

        );
    }


    return (

        <main className="min-h-screen bg-[#0d101b] text-white px-4 sm:px-6 lg:px-8 py-12">

            <div className="max-w-7xl mx-auto">


                {/* Header */}

                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-10">

                    <div>

                        <h1 className="text-3xl sm:text-4xl font-serif">
                            My Wishlist
                        </h1>

                        <p className="text-white/50 text-sm mt-2">
                            {wishlist.length} saved fragrance
                            {wishlist.length !== 1
                                ? "s"
                                : ""}
                        </p>

                    </div>


                    <button
                        onClick={clearWishlist}
                        className="text-sm text-red-400 hover:text-red-300"
                    >
                        Clear Wishlist
                    </button>

                </div>


                {/* Products */}

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">

                    {wishlist.map((product) => (

                        <div
                            key={product.id}
                            className="bg-[#111522] border border-white/10 rounded-xl overflow-hidden"
                        >

                            {/* Image */}

                            <div className="relative">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 sm:h-60 object-cover"
                                />


                                <button
                                    onClick={() =>
                                        removeFromWishlist(
                                            product.id
                                        )
                                    }
                                    className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#e7c27d] text-[#0d101b]"
                                >
                                    ♥
                                </button>

                            </div>


                            {/* Details */}

                            <div className="p-4">

                                <p className="text-[#e7c27d]/70 text-xs uppercase">
                                    {product.category}
                                </p>

                                <h2 className="mt-1 font-medium">
                                    {product.name}
                                </h2>

                                <p className="text-[#e7c27d] font-semibold mt-2">
                                    ₦{product.price.toLocaleString()}
                                </p>


                                <button
                                    onClick={() =>
                                        addToCart(product)
                                    }
                                    className="w-full mt-4 py-2 bg-[#e7c27d] text-[#0d101b] text-sm font-semibold"
                                >
                                    Add to Cart
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </main>

    );
}

export default Wishlist;