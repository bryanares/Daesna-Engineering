import React from "react";
import Container from "./utils/Container";

export default function About() {
    return (
        <section id="about" className="py-16 bg-white">

            <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">

                {/* ===== Left: Text ===== */}
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold text-center text-brand relative inline-block">
                        About Us
                        <span className="block h-1 w-16 bg-brand-light mx-auto mt-2 rounded"></span>
                    </h2>

                    <p className="mt-4 text-lg leading-relaxed text-slate-700">
                        At <span className="font-semibold text-brand">Daesna Engineering</span>,
                        we craft precision fibreglass solutions for aviation, automotive, and consumer needs.
                    </p>

                    <p className="mt-4 text-lg leading-relaxed text-slate-700">
                        From custom fabrication to expert repairs, our mission is simple:
                        <em className="text-brand"> Reviving Wings, Crafting Dreams</em>.
                    </p>
                </div>

                {/* ===== Right: Placeholder Image/Illustration ===== */}
                <div className="md:w-1/2 flex justify-center">
                    <div className="w-full max-w-md rounded-2xl bg-slate-100 border border-slate-200 p-6 flex items-center justify-center">
                        <span className="text-slate-500">[ About illustration placeholder ]</span>
                    </div>
                </div>

            </Container>
        </section>
    );
}
