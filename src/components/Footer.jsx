import React from "react";
import Container from "./utils/Container";

export default function Footer() {
    return (
        <footer className="bg-[#1E3A8A] text-white py-10">
            <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-bold">Daesna Engineering</h3>
                        <p className="text-sm text-slate-200">Reviving Wings, Crafting Dreams</p>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex flex-wrap justify-center gap-6 text-sm">
                        <a href="#home" className="hover:text-blue-200">Home</a>
                        <a href="#about" className="hover:text-blue-200">About</a>
                        <a href="#services" className="hover:text-blue-200">Services</a>
                        <a href="#droneclub" className="hover:text-blue-200">Drone Club</a>
                        <a href="#portfolio" className="hover:text-blue-200">Portfolio</a>
                        <a href="#contact" className="hover:text-blue-200">Contact</a>
                    </nav>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-600 mt-6 pt-4 text-center text-sm text-slate-300">
                    © {new Date().getFullYear()} Daesna Engineering. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
