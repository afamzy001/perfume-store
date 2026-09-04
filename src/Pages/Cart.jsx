import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Cart() {

    const {
        cart,
        cartTotal,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
    } = useCart();


    // Empty Cart

    if (cart.length === 0) {

        return (
            <main className="min-h-screen bg-[#0d101b] text-white px-5 py-20">

                <div className="max-w-3xl mx-auto text-center">

                    <div className="text-6xl mb-5">
                        🛒
                    </div>

                    <h1 className="font-serif text-3xl">
                        Your Cart Is Empty
                    </h1>

                    <p className="text-white/50 mt-3">
                        Discover your next signature fragrance.
                    </p>

                    <Link
                        to="/shop"
                        className="inline-block mt-7 px-7 py-3 bg-[#e7c27d] text-[#0d101b] font-semibold"
                    >
                        Continue Shopping
                    </Link>

                </div>

            </main>
        );
    }


    return (
        <main className="min-h-screen bg-[#0d101b] text-white px-4 sm:px-6 lg:px-8 py-12">

            <div className="max-w-7xl mx-auto">

                <h1 className="font-serif text-3xl sm:text-4xl mb-10">
                    Shopping Cart
                </h1>


                <div className="grid lg:grid-cols-3 gap-8">


                    {/* ================= ITEMS ================= */}

                    <div className="lg:col-span-2 space-y-4">

                        {cart.map((item) => (

                            <div
                                key={item.id}
                                className="bg-[#111522] border border-white/10 rounded-xl p-4 flex gap-4"
                            >

                                {/* Image */}

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
                                />


                                {/* Details */}

                                <div className="flex-1">

                                    <div className="flex justify-between gap-3">

                                        <div>

                                            <p className="text-[#e7c27d]/70 text-xs uppercase">
                                                {item.category}
                                            </p>

                                            <h2 className="text-base sm:text-lg font-medium mt-1">
                                                {item.name}
                                            </h2>

                                        </div>


                                        {/* Remove */}

                                        <button
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                            className="text-white/40 hover:text-red-400"
                                        >
                                            ✕
                                        </button>

                                    </div>


                                    {/* Price */}

                                    <p className="text-[#e7c27d] font-semibold mt-3">
                                        ₦{item.price.toLocaleString()}
                                    </p>


                                    {/* Quantity */}

                                    <div className="flex items-center gap-3 mt-4">

                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item.id)
                                            }
                                            className="w-8 h-8 border border-white/20 hover:border-[#e7c27d]"
                                        >
                                            -
                                        </button>

                                        <span>
                                            {item.quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                increaseQuantity(item.id)
                                            }
                                            className="w-8 h-8 border border-white/20 hover:border-[#e7c27d]"
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}


                        {/* Clear Cart */}

                        <button
                            onClick={clearCart}
                            className="text-sm text-red-400 hover:text-red-300"
                        >
                            Clear Cart
                        </button>

                    </div>


                    {/* ================= SUMMARY ================= */}

                    <div className="bg-[#111522] border border-white/10 rounded-xl p-6 h-fit">

                        <h2 className="text-xl font-serif mb-6">
                            Order Summary
                        </h2>


                        <div className="flex justify-between text-sm text-white/60">

                            <span>
                                Subtotal
                            </span>

                            <span>
                                ₦{cartTotal.toLocaleString()}
                            </span>

                        </div>


                        <div className="flex justify-between text-sm text-white/60 mt-3">

                            <span>
                                Delivery
                            </span>

                            <span>
                                Calculated at checkout
                            </span>

                        </div>


                        <div className="border-t border-white/10 mt-6 pt-5">

                            <div className="flex justify-between">

                                <span className="font-medium">
                                    Total
                                </span>

                                <span className="text-[#e7c27d] text-xl font-semibold">
                                    ₦{cartTotal.toLocaleString()}
                                </span>

                            </div>

                        </div>


                        <Link
                            to="/checkout"
                            className="block text-center mt-6 py-3 bg-[#e7c27d] text-[#0d101b] font-semibold hover:bg-[#f2d89e] transition"
                        >
                            Proceed to Checkout
                        </Link>

                    </div>

                </div>

            </div>

        </main>
    );
}

export default Cart;