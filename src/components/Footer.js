"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { CONTENT } from "@/lib/content"; // Importă contentul

export default function Footer() {
    const { footer } = CONTENT;

    return (
        <footer className="bg-background-footer mt-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto py-8 px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
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
                            <span className="text-xl font-bold text-primary">
                                {footer.companyName}
                            </span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                            {footer.tagline}
                        </p>
                    </div>

                    <div>
                        <h3 className="text-primary font-semibold text-sm mb-2">
                            {footer.quickLinks}
                        </h3>
                        <ul className="space-y-1">
                            {footer.links.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-6 mt-6 border-t border-muted">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-muted-foreground text-xs">
                            © {new Date().getFullYear()} {footer.companyName}{" "}
                            {footer.copyright}
                        </p>
                        <div className="flex items-center gap-4">
                            <Link
                                href="/privacy-policy"
                                className="text-muted-foreground hover:text-primary text-xs transition-colors"
                            >
                                {footer.privacy}
                            </Link>
                            <Link
                                href="/terms-of-service"
                                className="text-muted-foreground hover:text-primary text-xs transition-colors"
                            >
                                {footer.terms}
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <AnimatedThemeToggler />
                        <a
                            href="https://facebook.com/prezentdigital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors"
                            aria-label="Facebook"
                        >
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a
                            href="https://instagram.com/prezentdigital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors"
                            aria-label="Instagram"
                        >
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a
                            href="https://tiktok.com/@prezentdigital"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors"
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
                            className="text-foreground hover:text-primary transition-colors"
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
