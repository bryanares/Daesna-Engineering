import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Drone Club", href: "#droneclub" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">

                {/* Logo - clickable */}
                <a
                    href="#home"
                    className="text-2xl font-bold text-brand hover:text-brand-light transition-colors duration-300"
                >
                    Daesna Engineering
                </a>

                {/* Hamburger - always visible */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-2xl text-brand hover:text-brand-light transition-colors duration-300"
                >
                    <FaBars />
                </button>
            </div>

            {/* Sidebar Panel */}
            {isOpen && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Panel */}
                    <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6 transform transition-transform duration-300">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="self-end text-2xl text-brand hover:text-brand-light transition-colors duration-300 mb-8"
                        >
                            <FaTimes />
                        </button>

                        <ul className="space-y-6 font-semibold">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-brand hover:text-brand-light transition-colors duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </>
            )}
        </nav>
    );
}
