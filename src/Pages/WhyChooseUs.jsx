import {
    Award,
    ShieldCheck,
    Truck,
    HeartHandshake,
} from "lucide-react";

const features = [
    {
        icon: Award,
        title: "Premium Quality",
        description:
            "We carefully select exceptional fragrances designed to deliver a lasting impression.",
    },
    {
        icon: ShieldCheck,
        title: "Authentic Products",
        description:
            "Every fragrance in our collection is sourced with quality and authenticity in mind.",
    },
    {
        icon: Truck,
        title: "Reliable Delivery",
        description:
            "Your order is carefully prepared and delivered safely to your preferred location.",
    },
    {
        icon: HeartHandshake,
        title: "Exceptional Service",
        description:
            "We are committed to providing a smooth and enjoyable shopping experience.",
    },
];

function WhyChooseUs() {
    return (
        <section className="bg-[#F8F6F2] py-20">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">

                {/* Heading */}
                <div className="mx-auto max-w-2xl text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#B08D57]">
                        Why Choose Us
                    </p>

                    <h2 className="mt-4 font-serif text-4xl text-neutral-900 md:text-5xl">
                        More Than Just
                        <br />
                        A Fragrance.
                    </h2>

                    <p className="mt-5 leading-7 text-neutral-600">
                        We believe every fragrance should feel personal, memorable,
                        and worthy of the moments you create.
                    </p>
                </div>

                {/* Features */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="border border-neutral-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <div className="flex h-12 w-12 items-center justify-center bg-[#F8F6F2] text-[#B08D57]">
                                    <Icon size={24} strokeWidth={1.5} />
                                </div>

                                <h3 className="mt-6 font-serif text-xl text-neutral-900">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-neutral-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;