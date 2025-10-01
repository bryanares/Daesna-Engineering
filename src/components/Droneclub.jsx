import React from "react";
import Container from "./utils/Container";

const PROGRAMS = [
    {
        title: "Drone Club",
        desc: [
            "Drone theory & mechanics",
            "Drone flying simulations",
            "Aircraft model building",
            "Principles of flight experiments",
        ],
    },
    {
        title: "Drone Soccer",
        desc: [
            "Train & compete in matches",
            "Teamwork & precision flying",
            "School-level competitions",
            "Drone maintenance & troubleshooting",
        ],
    },
    {
        title: "Remote Pilot’s Club",
        desc: [
            "Hands-on flying sessions",
            "Drone simulator training",
            "Drone assembly",
            "Advanced piloting skills",
            "KCAA hobbyist license (under 18)",
        ],
    },
];

export default function DroneClub() {
    return (
        <section id="droneclub" className="py-20 bg-white">
            <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section heading */}
                <h2 className="text-3xl font-bold text-center text-[#1E3A8A] relative inline-block">
                    Join Our Drone Club
                    <span className="block h-1 w-16 bg-blue-600 mx-auto mt-2 rounded"></span>
                </h2>

                <p className="mt-4 text-lg text-center text-slate-600 max-w-2xl mx-auto">
                    Dive into the exciting world of drones! Learn, play, and master drone
                    technology while having fun with friends.
                </p>

                {/* Grid of programs */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {PROGRAMS.map((prog, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl bg-slate-50 shadow hover:shadow-md transition"
                        >
                            {/* Placeholder icon */}
                            <div className="h-12 w-12 flex items-center justify-center rounded-md bg-gradient-to-br from-blue-900 to-blue-500 text-white mb-4">
                                <span className="font-bold text-lg">{prog.title[0]}</span>
                            </div>

                            <h3 className="text-xl font-semibold text-slate-800">{prog.title}</h3>

                            <ul className="mt-3 list-disc list-inside text-slate-600 space-y-1">
                                {prog.desc.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                className="mt-4 inline-block px-4 py-2 rounded-md bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold shadow hover:opacity-90 transition"
                            >
                                Learn More
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
