import { useParams, useNavigate } from "react-router-dom";
import products from "../Data/products";

function Checkout() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p>Product not found.</p>
            </div>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(
            "Order received! Payment integration will be added next."
        );
    };

    return (
        <section className="min-h-screen bg-[#F8F6F2] py-16">
            <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:px-8">

                {/* Checkout Form */}
                <div className="bg-white p-6 md:p-10">
                    <h1 className="font-serif text-3xl text-neutral-900">
                        Checkout
                    </h1>

                    <p className="mt-2 text-sm text-neutral-600">
                        Enter your delivery information.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-5"
                    >
                        <input
                            type="text"
                            placeholder="Full Name"
                            required
                            className="w-full border border-neutral-300 px-4 py-4 outline-none focus:border-[#B08D57]"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="w-full border border-neutral-300 px-4 py-4 outline-none focus:border-[#B08D57]"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="w-full border border-neutral-300 px-4 py-4 outline-none focus:border-[#B08D57]"
                        />

                        <textarea
                            placeholder="Delivery Address"
                            rows="4"
                            required
                            className="w-full resize-none border border-neutral-300 px-4 py-4 outline-none focus:border-[#B08D57]"
                        />

                        <button
                            type="submit"
                            className="w-full bg-neutral-900 py-4 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-[#B08D57]"
                        >
                            Proceed to Payment
                        </button>
                    </form>
                </div>

                {/* Order Summary */}
                <div className="h-fit bg-white p-6 md:p-10">
                    <h2 className="font-serif text-2xl text-neutral-900">
                        Order Summary
                    </h2>

                    <div className="mt-8 flex gap-5">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-28 w-24 object-cover"
                        />

                        <div>
                            <h3 className="font-serif text-xl">
                                {product.name}
                            </h3>

                            <p className="mt-2 text-sm capitalize text-neutral-500">
                                {product.category}
                            </p>

                            <p className="mt-3 font-medium">
                                ₦{product.price.toLocaleString()}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-neutral-200 pt-6">

                        <div className="flex justify-between text-sm text-neutral-600">
                            <span>Subtotal</span>

                            <span>
                                ₦{product.price.toLocaleString()}
                            </span>
                        </div>

                        <div className="mt-4 flex justify-between text-lg font-medium text-neutral-900">
                            <span>Total</span>

                            <span>
                                ₦{product.price.toLocaleString()}
                            </span>
                        </div>

                    </div>

                    <button
                        onClick={() => navigate(-1)}
                        className="mt-8 text-sm text-[#B08D57]"
                    >
                        ← Back to Product
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Checkout;