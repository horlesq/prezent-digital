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
    NavbarButton,
} from "./Navbar";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", link: "/" },
        { name: "Services", link: "/services" },
        { name: "Portfolio", link: "/portfolio" },
        { name: "About", link: "/about" },
        { name: "Contact", link: "/contact" },
    ];

    const handleItemClick = () => {
        setIsOpen(false);
    };

    return (
        <Navbar className="top-0">
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo />
                <NavItems items={navItems} onItemClick={handleItemClick} />
                <NavbarButton href="/contact" variant="gradient">
                    Get Started
                </NavbarButton>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    {navItems.map((item, idx) => (
                        <a
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={handleItemClick}
                            className="w-full text-left text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="w-full pt-4">
                        <NavbarButton href="/contact" variant="gradient">
                            Get Started
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
};

export default Header;
