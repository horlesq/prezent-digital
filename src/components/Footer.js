"use client";

import Link from "next/link";

export default function Footer() {
    const footerLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <footer className="bg-white dark:bg-neutral-950 mt-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto py-8 ">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                                prezent.digital
                            </span>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed max-w-md">
                            Your personal recipe generator. Use Artificial
                            Intelligence to instantly create unique recipes and
                            culinary suggestions from the ingredients you have
                            at home.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-6 mt-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                            © {new Date().getFullYear()} prezent.digital All
                            rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 text-sm">
                            <span>Created by</span>
                            <a
                                href="https://horly.dev/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                            >
                                Horly
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
