import { Link } from "react-router-dom";

const categories = [
    {
        name: "Women's Fragrances",
        description: "Elegant scents created to express confidence and beauty.",
        image:
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539",
        link: "/shop?category=women",
    },
    {
        name: "Men's Fragrances",
        description: "Bold, refined fragrances for the modern gentleman.",
        image:
            "https://images.unsplash.com/photo-1587017539504-67cfbddac569",
        link: "/shop?category=men",
    },
    {
        name: "Unisex Collection",
        description: "Timeless fragrances designed to be enjoyed by everyone.",
        image:
            "https://images.unsplash.com/photo-1563170351-be82bc888aa4",
        link: "/shop?category=unisex",
    },
    {
        name: "Oud Collection",
        description: "Rich and distinctive scents inspired by timeless tradition.",
        image:
            "https://images.unsplash.com/photo-1619994403073-2cec844b8e63",
        link: "/shop?category=oud",
    },
];

function Categories() {
    return (
        <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                {/* Section Heading */}
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

                    <div className="max-w-xl">
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#B08D57]">
                            Explore Our Collection
                        </p>

                        <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
                            Shop by Category
                        </h2>

                        <p className="mt-5 leading-7 text-neutral-600">
                            Find the perfect fragrance for every personality, moment,
                            and occasion.
                        </p>
                    </div>

                    <Link
                        to="/shop"
                        className="text-sm font-medium uppercase tracking-wider text-neutral-900 transition hover:text-[#B08D57]"
                    >
                        View All Perfumes →
                    </Link>

                </div>

                {/* Categories Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={category.link}
                            className="group relative block h-[420px] overflow-hidden"
                        >

                            {/* Image */}
                            <img
                                src={category.image}
                                alt={category.name}
                                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-6 text-white">

                                <h3 className="font-serif text-2xl">
                                    {category.name}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-neutral-200">
                                    {category.description}
                                </p>

                                <span className="mt-5 inline-block text-xs font-medium uppercase tracking-wider">
                                    Explore Collection →
                                </span>

                            </div>

                        </Link>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Categories;