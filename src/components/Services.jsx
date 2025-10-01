import React from "react";
import Container from "./utils/Container";

const SERVICES = [
    {
        title: "Custom Parts & Panels Fabrication",
        desc: "Precision-built fibreglass parts for unique projects."
    },
    {
        title: "Vehicle Bumpers & Panels Restoration",
        desc: "Restore and reinforce damaged car bumpers and panels."
    },
    {
        title: "Simulator Panels Fabrication",
        desc: "Design and fabrication of simulator instrument panels."
    },
    {
        title: "Aviation & Marine Fabrication",
        desc: "Fibreglass solutions for aircraft and marine structures."
    },
    {
        title: "Repairs & Restoration",
        desc: "Affordable repairs for panels, dashboards, and interiors."
    },
    {
        title: "Replica Model Building",
        desc: "Detailed fibreglass replicas of airplanes and cars."
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-slate-50">
            <Container>
                {/* Section heading */}
                <h2 className="text-3xl font-bold text-center text-[#1E3A8A] relative inline-block">
                    Our Services
                    <span className="block h-1 w-16 bg-blue-600 mx-auto mt-2 rounded"></span>
                </h2>

                <p className="mt-4 text-lg text-center text-slate-600 max-w-2xl mx-auto">
                    We specialize in composite materials, delivering tailored solutions
                    in fibreglass fabrication, repair, and restoration.
                </p>

                {/* Services grid */}
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {SERVICES.map((service, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl bg-white shadow hover:shadow-md transition flex flex-col items-start"
                        >
                            {/* Placeholder icon */}
                            <div className="h-12 w-12 flex items-center justify-center rounded-md bg-gradient-to-br from-blue-900 to-blue-500 text-white mb-4">
                                <span className="font-bold text-lg">{service.title[0]}</span>
                            </div>

                            <h3 className="text-xl font-semibold text-slate-800">
                                {service.title}
                            </h3>

                            <p className="mt-2 text-slate-600">{service.desc}</p>
                            {/**CTA */}
                            {/* <div className="mt-10 text-center">
                                <a href="#contact" className="px-6 py-3 rounded-lg bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
                                    Request Service
                                </a>
                            </div> */}

                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
