// components/sections/WhyChooseUs.js
"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Top Notch Design",
        description:
            "— We design great looking websites that stand out. We use the latest design trends and techniques to make your website look great.",
    },
    {
        title: "Development",
        description:
            "— We build your website using the latest technologies and frameworks. We use the best tools to make sure your website is fast and secure.",
    },
    {
        title: "Performance Optimized",
        description:
            "— We focus heavily on performance optimizations. Whether it's Image optimization or website load speed, we have got you covered.",
    },
    {
        title: "Responsive Design",
        description:
            "— Your website will look amazing on any device. We make sure your website looks great on mobile, tablet, and desktop.",
    },
    {
        title: "Search Engine Optimized",
        description:
            "— We make sure you get found on Google. We use the latest SEO techniques to make sure your website is optimized for search engines.",
    },
    {
        title: "Contact Forms",
        description:
            "— We know that you want to get reached out. We make sure you get all the leads you need. We integrate your website with your favorite email marketing service.",
    },
    {
        title: "Revisions",
        description:
            "— We make sure you are happy with the website. We provide revisions until you are happy with the website.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 sm:mb-20"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
                        <span className="bg-foreground bg-clip-text text-transparent">
                            Why Choose Us?
                        </span>
                    </h2>
                </motion.div>

                {/* Features List - Same Line */}
                <div className="space-y-6 sm:space-y-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            className="text-left"
                        >
                            <p className="text-lg sm:text-xl text-foreground leading-relaxed">
                                <span className="font-bold">
                                    {feature.title}
                                </span>
                                <span className="text-muted-foreground">
                                    {feature.description}
                                </span>
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
