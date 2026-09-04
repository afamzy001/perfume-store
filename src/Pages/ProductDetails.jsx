import { useParams, Link, useNavigate } from "react-router-dom";
import products from "../Data/products";
import { ArrowLeft, ShoppingBag } from "lucide-react";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center">
                    <h1 className="font-serif text-3xl">
                        Product Not Found
                    </h1>

                    <Link
                        to="/shop"
                        className="mt-6 inline-block text-[#B08D57]"
                    >
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="bg-[#F8F6F2] py-16">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-10 flex items-center gap-2 text-sm text-neutral-600 transition hover:text-[#B08D57]"
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Product Image */}
                    <div className="overflow-hidden bg-[#E9E4DC]">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-[500px] w-full object-cover lg:h-[650px]"
                        />
                    </div>

                    {/* Product Information */}
                    <div className="flex flex-col justify-center">

                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#B08D57]">
                            {product.category}
                        </p>

                        <h1 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
                            {product.name}
                        </h1>

                        <p className="mt-5 text-2xl font-medium text-neutral-900">
                            ₦{product.price.toLocaleString()}
                        </p>

                        <p className="mt-6 max-w-xl leading-7 text-neutral-600">
                            {product.description}
                        </p>

                        {/* Notes */}
                        <div className="mt-8">
                            <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-900">
                                Fragrance Notes
                            </h3>

                            <div className="mt-4 flex flex-wrap gap-3">
                                {product.notes.map((note) => (
                                    <span
                                        key={note}
                                        className="border border-neutral-300 px-4 py-2 text-sm text-neutral-600"
                                    >
                                        {note}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                            <button
                                onClick={() => navigate(`/checkout/${product.id}`)}
                                className="flex items-center justify-center gap-3 bg-neutral-900 px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition hover:bg-[#B08D57]"
                            >
                                <ShoppingBag size={18} />
                                Buy Now
                            </button>

                            <Link
                                to="/shop"
                                className="border border-neutral-900 px-8 py-4 text-center text-sm font-medium uppercase tracking-wider text-neutral-900 transition hover:bg-neutral-900 hover:text-white"
                            >
                                Continue Shopping
                            </Link>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default ProductDetails;