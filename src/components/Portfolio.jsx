import React, { useState } from "react";
import Container from "./utils/Container";

const PROJECTS = [
    {
        title: "UAV Fabrication",
        img: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
    },
    {
        title: "Drone Flying Over Farm",
        img: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
    },
    {
        title: "Simulator Panel",
        img: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
    },
    {
        title: "Vehicle Panel Repair",
        img: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
    },
    {
        title: "Fibreglass Model",
        img: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
    },
    {
        title: "Marine Application",
        img: "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg",
    },
];

export default function Portfolio() {
    const [selected, setSelected] = useState(null); // track open image

    return (
        <section id="portfolio" className="py-16 bg-slate-50">
            <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Heading */}
                <h2 className="text-3xl font-bold text-center text-brand relative inline-block">
                    Our Portfolio
                    <span className="block h-1 w-16 bg-brand-light mx-auto mt-2 rounded"></span>
                </h2>

                <p className="mt-4 text-lg text-center text-slate-700 max-w-2xl mx-auto">
                    A glimpse into our recent projects — from UAV fabrication to drone
                    competitions and custom builds.
                </p>

                {/* Image Grid */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((proj, i) => (
                        <div
                            key={i}
                            className="relative group overflow-hidden rounded-xl shadow hover:shadow-lg transition cursor-pointer"
                            onClick={() => setSelected(proj)} // open modal
                        >
                            <img
                                src={proj.img}
                                alt={proj.title}
                                className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-brand-dark/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                <span className="text-white text-lg font-medium">
                                    {proj.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Modal */}
            {selected && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
                    <div className="relative max-w-4xl w-full px-4">
                        <img
                            src={selected.img}
                            alt={selected.title}
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                        <p className="text-center text-white mt-4 text-lg">
                            {selected.title}
                        </p>
                        {/* Close button */}
                        <button
                            className="absolute top-4 right-6 text-white text-3xl font-bold hover:text-brand-light transition-colors"
                            onClick={() => setSelected(null)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
