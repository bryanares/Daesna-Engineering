// src/components/Hero.jsx
import React from "react";
import Container from "./utils/Container";

export default function Hero() {
    return (
        <section
            id="home"
            className="pt-24 bg-gradient-to-r from-brand to-brand-light text-white"
        >
            <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col-reverse md:flex-row items-center gap-10">

                    {/* ===== Left: Text block ===== */}
                    <div className="md:w-1/2 text-center md:text-left">
                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                            Reviving Wings, Crafting Dreams
                        </h1>

                        {/* Subtext */}
                        <p className="mt-4 text-lg max-w-xl mx-auto md:mx-0 opacity-95 text-slate-100">
                            From UAV engineering and composite fabrication to hands-on drone training and drone soccer — Daesna builds, repairs, and teaches with precision and care.
                        </p>

                        {/* CTA buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#services"
                                className="px-6 py-3 rounded-lg bg-white text-brand font-semibold hover:bg-slate-100 transition-colors duration-300"
                            >
                                Explore Services
                            </a>
                            <a
                                href="#droneclub"
                                className="px-6 py-3 rounded-lg bg-brand-dark text-white font-semibold hover:bg-brand transition-colors duration-300"
                            >
                                Join Drone Club
                            </a>
                        </div>
                    </div>

                    {/* ===== Right: Image / Illustration block ===== */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="w-full max-w-md rounded-2xl bg-white/10 border border-white/20 p-6 flex items-center justify-center">
                            {/* Placeholder illustration */}
                            <svg
                                role="img"
                                aria-label="drone illustration placeholder"
                                width="320"
                                height="220"
                                viewBox="0 0 320 220"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-auto"
                            >
                                <rect width="320" height="220" rx="18" fill="white" fillOpacity="0.06" />
                                <g transform="translate(40,40)" stroke="#ffffff" strokeOpacity="0.95" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
                                    <circle cx="40" cy="20" r="4" />
                                    <circle cx="120" cy="20" r="4" />
                                    <circle cx="80" cy="60" r="8" />
                                    <path d="M80 68 L80 110" />
                                    <rect x="68" y="110" width="24" height="10" rx="2" />
                                    <path d="M40 20 L80 60 L120 20" />
                                </g>
                                <text x="50%" y="85%" dominantBaseline="middle" textAnchor="middle" fill="white" fillOpacity="0.9" fontSize="12">
                                    Hero illustration (placeholder)
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
