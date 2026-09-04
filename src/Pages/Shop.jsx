import React, { useMemo, useState } from "react";
import ProductCard from "../Components/ProductCard";
import products from "../Data/products";

function Shop() {

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedPrice, setSelectedPrice] = useState("All");


    // Categories
    const categories = [
        "All",
        "Men",
        "Women",
        "Unisex",
    ];


    // Filter Products
    const filteredProducts = useMemo(() => {

        return products.filter((product) => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase());


            const matchesCategory =
                selectedCategory === "All" ||
                product.category === selectedCategory;


            const matchesPrice =
                selectedPrice === "All" ||
                (selectedPrice === "under100" &&
                    product.price < 100000) ||
                (selectedPrice === "100to150" &&
                    product.price >= 100000 &&
                    product.price <= 150000) ||
                (selectedPrice === "above150" &&
                    product.price > 150000);


            return (
                matchesSearch &&
                matchesCategory &&
                matchesPrice
            );
        });

    }, [
        searchQuery,
        selectedCategory,
        selectedPrice,
    ]);


    return (
        <main className="min-h-screen bg-[#0d101b] text-white px-4 sm:px-6 lg:px-8 py-10">

            <div className="max-w-7xl mx-auto">


                {/* ================= PAGE HEADER ================= */}

                <div className="text-center mb-10">

                    <p className="text-[#e7c27d] uppercase tracking-[0.3em] text-xs mb-3">
                        Explore Our Collection
                    </p>

                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl">
                        Shop Fragrances
                    </h1>

                    <p className="text-white/60 text-sm mt-4 max-w-xl mx-auto">
                        Discover our carefully selected collection of
                        luxury fragrances for every personality and occasion.
                    </p>

                </div>


                {/* ================= SEARCH ================= */}

                <div className="max-w-2xl mx-auto mb-8">

                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Search for a perfume..."
                            value={searchQuery}
                            onChange={(e) =>
                                setSearchQuery(e.target.value)
                            }
                            className="w-full bg-[#111522] border border-white/10 rounded-lg px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#e7c27d]"
                        />

                        <span className="absolute right-4 top-1/2 -translate-y-1/2">
                            🔍
                        </span>

                    </div>

                </div>


                {/* ================= FILTERS ================= */}

                <div className="flex flex-col sm:flex-row gap-4 justify-between mb-8">

                    {/* Category Filter */}

                    <div className="flex flex-wrap gap-2">

                        {categories.map((category) => (

                            <button
                                key={category}
                                onClick={() =>
                                    setSelectedCategory(category)
                                }
                                className={`px-4 py-2 text-xs sm:text-sm rounded-full border transition ${selectedCategory === category
                                    ? "bg-[#e7c27d] text-[#0d101b] border-[#e7c27d]"
                                    : "border-white/10 text-white/70 hover:border-[#e7c27d] hover:text-[#e7c27d]"
                                    }`}
                            >
                                {category}
                            </button>

                        ))}

                    </div>


                    {/* Price Filter */}

                    <select
                        value={selectedPrice}
                        onChange={(e) =>
                            setSelectedPrice(e.target.value)
                        }
                        className="bg-[#111522] border border-white/10 text-white text-sm px-4 py-2 rounded-lg focus:outline-none focus:border-[#e7c27d]"
                    >

                        <option value="All">
                            All Prices
                        </option>

                        <option value="under100">
                            Under ₦100,000
                        </option>

                        <option value="100to150">
                            ₦100,000 - ₦150,000
                        </option>

                        <option value="above150">
                            Above ₦150,000
                        </option>

                    </select>

                </div>


                {/* ================= RESULTS COUNT ================= */}

                <div className="mb-5">

                    <p className="text-white/50 text-sm">
                        {filteredProducts.length} fragrances found
                    </p>

                </div>


                {/* ================= PRODUCT GRID ================= */}

                {filteredProducts.length > 0 ? (

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">

                        {filteredProducts.map((product) => (

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
                            No fragrances found
                        </h2>

                        <p className="text-white/50 text-sm mt-2">
                            Try changing your search or filters.
                        </p>

                    </div>

                )}

            </div>

        </main>
    );
}

export default Shop;