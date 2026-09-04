import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishlistContext";
import { openWhatsApp } from "../utils/whatsapp.js";

function ProductCard({ product }) {

    const { addToCart } = useCart();

    const { toggleWishlist, isInWishlist } = useWishlist();

    // WhatsApp Buy Now
    const handleBuyNow = () => {

        const message = `Hello, I want to order:

            Product: ${product.name}
            Category: ${product.category}
            Price: ₦${product.price.toLocaleString()}
            Quantity: 1

            Please confirm availability and send payment details.`;

        openWhatsApp(message);
    };


    return (
        <div className="group bg-[#111522] border border-white/10 rounded-xl overflow-hidden hover:border-[#e7c27d]/60 transition-all duration-300">

            {/* Product Image */}
            <div className="relative h-48 sm:h-60 overflow-hidden bg-[#090b12]">

                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </Link>

                {/* New Badge */}
                {product.isNew && (
                    <span className="absolute top-3 left-3 bg-[#e7c27d] text-[#0d101b] text-[10px] sm:text-xs font-bold px-2 py-1">
                        NEW
                    </span>
                )}

                {/* Wishlist */}
                <button
                    onClick={() => toggleWishlist(product)}
                    className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition ${isInWishlist(product.id)
                        ? "bg-[#e7c27d] text-[#0d101b]"
                        : "bg-black/60 text-white hover:bg-[#e7c27d] hover:text-[#0d101b]"
                        }`}
                    aria-label="Add to wishlist"
                >
                    {isInWishlist(product.id) ? "♥" : "♡"}
                </button>

            </div>


            {/* Product Details */}
            <div className="p-3 sm:p-4">

                {/* Category */}
                <p className="text-[#e7c27d]/70 uppercase tracking-widest text-[9px] sm:text-xs">
                    {product.category}
                </p>

                {/* Product Name */}
                <h3 className="text-white text-sm sm:text-base font-medium mt-1">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex gap-0.5 my-2 text-[#e7c27d] text-xs">
                    {"★".repeat(product.rating)}
                </div>

                {/* Price */}
                <p className="text-[#e7c27d] font-semibold text-sm sm:text-base mb-3">
                    ₦{product.price.toLocaleString()}
                </p>


                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2">

                    <Link
                        to={`/product/${product.id}`}
                        className="py-2 text-center border border-[#e7c27d]/60 text-[#e7c27d] text-[10px] sm:text-xs hover:bg-[#e7c27d] hover:text-[#0d101b] transition"
                    >
                        View Details
                    </Link>

                    <button
                        onClick={() => addToCart(product)}
                        className="py-2 bg-[#e7c27d] text-[#0d101b] text-[10px] sm:text-xs font-semibold hover:bg-[#f2d89e] transition"
                    >
                        Add to Cart
                    </button>

                </div>


                {/* WhatsApp Buy Now */}
                <button
                    onClick={handleBuyNow}
                    className="w-full mt-2 py-2.5 bg-[#25D366] text-white text-[10px] sm:text-xs font-semibold rounded-md hover:opacity-90 transition"
                >
                    💳 Buy Now via WhatsApp
                </button>

            </div>

        </div>
    );
}

export default ProductCard;

