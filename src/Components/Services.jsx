import {
    Truck,
    ShieldCheck,
    Gift,
    Headphones,
    Sparkles,
    MessageCircle,
} from "lucide-react";

const services = [
    {
        icon: Truck,
        title: "Fast Delivery",
        description:
            "Your favourite fragrances delivered safely and conveniently.",
    },
    {
        icon: ShieldCheck,
        title: "Authentic Products",
        description:
            "Carefully selected fragrances from trusted sources.",
    },
    {
        icon: Gift,
        title: "Gift Wrapping",
        description:
            "Elegant packaging with thoughtful gift messages, perfect for birthdays and anniversaries.",
    },
    {
        icon: Sparkles,
        title: "Fragrance Assistance",
        description:
            "Not sure what to choose? We'll help you find a fragrance that matches your taste and personality.",
        whatsapp: true,
    },
    {
        icon: Headphones,
        title: "Customer Support",
        description:
            "Our team is always ready to assist with your enquiries and orders.",
    },
];

function Services() {
    const whatsappNumber = "2349031576915";

    const handleFragranceAdvice = () => {
        const message = `Hello Lizzy Essence 👋

I'm not sure which fragrance to choose.

I'd love some personalized fragrance recommendations.`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(url, "_blank");
    };

    return (
        <section className="border-y border-neutral-200 bg-white">

            <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">

                {/* HEADER */}
                <div className="mx-auto mb-12 max-w-2xl text-center">

                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B08D57]">
                        The Lizzy Essence Experience
                    </p>

                    <h2 className="mt-3 font-serif text-3xl text-neutral-900 sm:text-4xl">
                        More Than Just Fragrance
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-neutral-600">
                        From carefully selected fragrances to thoughtful
                        gifting and personalized assistance, we're here to
                        make every experience special.
                    </p>

                </div>


                {/* SERVICES */}
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={service.title}
                                className="group flex items-start gap-4"
                            >

                                {/* ICON */}
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#F8F6F2] text-[#B08D57] transition duration-300 group-hover:bg-[#B08D57] group-hover:text-white">
                                    <Icon
                                        size={24}
                                        strokeWidth={1.5}
                                    />
                                </div>


                                {/* CONTENT */}
                                <div>

                                    <h3 className="font-serif text-lg text-neutral-900">
                                        {service.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                                        {service.description}
                                    </p>

                                    {/* WHATSAPP CTA */}
                                    {service.whatsapp && (
                                        <button
                                            onClick={handleFragranceAdvice}
                                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#B08D57] transition hover:text-[#8f713f]"
                                        >
                                            <MessageCircle size={16} />
                                            Get Fragrance Advice
                                        </button>
                                    )}

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default Services;