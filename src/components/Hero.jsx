// src/components/Hero.jsx
import React from "react";
import Container from "./utils/Container";

export default function Hero() {
    return (
        // Section wrapper: id="home" so navbar links can jump here.
        // pt-24 clears the fixed navbar (adjust if your navbar height changes).
        <section
            id="home"
            className="pt-24 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white"
        >
            {/* Container: constrain width, add horizontal padding, vertical padding.
          py-20 gives breathing room above and below the hero content. */}
            <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Layout: mobile = stacked (column-reverse so image sits above on very small screens if desired),
            md+ = side-by-side row. gap-10 gives space between text and image. */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-10">

                    {/* ========== Left: Text block ========== */}
                    <div className="md:w-1/2">
                        {/* Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                            Reviving Wings, Crafting Dreams
                        </h1>

                        {/* Subtext / elevator pitch — keep concise and scannable */}
                        <p className="mt-4 text-lg max-w-xl opacity-95">
                            From UAV engineering and composite fabrication to hands-on drone training and drone soccer — Daesna builds, repairs, and teaches with precision and care.
                        </p>

                        {/* CTA buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a
                                href="#services"
                                className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:bg-slate-100 transition"
                            >
                                Explore Services
                            </a>
                            <a
                                href="#droneclub"
                                className="px-6 py-3 rounded-lg bg-blue-900 text-white font-semibold hover:bg-blue-800 transition"
                            >
                                Join Drone Club
                            </a>
                        </div>

                    </div>

                    {/* ========== Right: Illustration / image block ========== */}
                    <div className="md:w-1/2 flex justify-center">
                        {/* Card that holds the image/illustration placeholder */}
                        <div className="w-full max-w-md rounded-2xl bg-white/10 border border-white/20 p-6 flex items-center justify-center">

                            {/* Inline SVG placeholder — replace with <img src={...} alt="..." /> when you add real art */}
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
