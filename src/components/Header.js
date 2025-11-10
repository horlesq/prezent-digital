"use client";

import { useState } from "react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    NavbarLogo,
} from "./Navbar";
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler";
import { CONTENT } from "@/lib/content";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { nav } = CONTENT;

    const handleItemClick = () => {
        setIsOpen(false);
    };

    return (
        <Navbar className="top-0">
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={nav.items} onItemClick={handleItemClick} />
                <AnimatedThemeToggler />
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <div className="flex items-center gap-3">
                        <AnimatedThemeToggler />
                        <MobileNavToggle
                            isOpen={isOpen}
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </div>
                </MobileNavHeader>

                <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {nav.items.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={handleItemClick}
                            className="w-full text-left text-foreground hover:text-primary"
                        >
                            {item.name}
                        </a>
                    ))}
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
};

export default Header;
