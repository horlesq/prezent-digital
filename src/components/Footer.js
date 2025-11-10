"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";

export default function Footer() {
    const footerLinks = [
        { href: "/", label: "Acasa" },
        { href: "/despre", label: "Despre" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <footer className="bg-neutral-50 dark:bg-black mt-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto py-8 px-4">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-2 mb-4">
                            {/* Light mode logo */}
                            <Image
                                src="/assets/logo-light.png"
                                alt="logo"
                                width={30}
                                height={30}
                                className="dark:hidden"
                            />
                            {/* Dark mode logo */}
                            <Image
                                src="/assets/logo-dark.png"
                                alt="logo"
                                width={30}
                                height={30}
                                className="hidden dark:block"
                            />
                            <span className="text-xl font-bold text-rose-600 dark:text-rose-400">
                                Prezent Digital
                            </span>
                        </div>
                        <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed max-w-md">
                            Crestem afaceri prin solutii digitale.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-rose-600 dark:text-rose-400 font-semibold text-sm mb-4">
                            Meniu Rapid
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-neutral-600 dark:text-neutral-300 hover:text-rose-600 dark:hover:text-rose-400 text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200 dark:border-neutral-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-500 dark:text-neutral-400 text-xs">
                            © {new Date().getFullYear()} prezent.digital All
                            rights reserved.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/privacy-policy"
                                className="text-neutral-500 dark:text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 text-xs transition-colors"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-neutral-500 dark:text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 text-xs transition-colors"
                            >
                                Terms of Service
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <AnimatedThemeToggler />
                        <a
                            href="https://facebook.com/prezentdigital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 dark:text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a
                            href="https://instagram.com/prezentdigital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 dark:text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a
                            href="https://tiktok.com/@prezentdigital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 dark:text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                            aria-label="TikTok"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                            </svg>
                        </a>
                        <a
                            href="https://linkedin.com/company/prezentdigital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-500 dark:text-neutral-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
