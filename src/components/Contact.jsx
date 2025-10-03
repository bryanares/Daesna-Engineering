import React from "react";
import Container from "./utils/Container";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-slate-50">
            <Container className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-brand">
                    Get In Touch
                    <span className="block h-1 w-16 bg-brand-light mx-auto mt-2 rounded"></span>
                </h2>

                <p className="mt-4 text-lg text-slate-700">
                    Let’s collaborate! Whether it’s drone services, UAV training, or custom builds —
                    reach us directly through email, WhatsApp, or LinkedIn.
                </p>

                {/* Contact Options */}
                <div className="mt-10 grid gap-8 sm:grid-cols-3">
                    {/* Email */}
                    <a
                        href="mailto:example@email.com"
                        className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition group"
                    >
                        <FaEnvelope className="text-3xl text-brand group-hover:text-brand-light transition-colors" />
                        <span className="mt-3 font-semibold text-brand">Email</span>
                        <span className="text-slate-600 text-sm">daesna@email.com</span>
                    </a>

                    {/* WhatsApp */}
                    <a
                        href="https://wa.me/254700000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition group"
                    >
                        <FaWhatsapp className="text-3xl text-green-500 group-hover:text-green-400 transition-colors" />
                        <span className="mt-3 font-semibold text-brand">WhatsApp</span>
                        <span className="text-slate-600 text-sm">+254 700 000 000</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://linkedin.com/in/username"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-6 bg-white rounded-xl shadow hover:shadow-md transition group"
                    >
                        <FaLinkedin className="text-3xl text-sky-600 group-hover:text-sky-500 transition-colors" />
                        <span className="mt-3 font-semibold text-brand">LinkedIn</span>
                        <span className="text-slate-600 text-sm">Daesna Engineering</span>
                    </a>
                </div>

                {/* Follow Us Row */}
                <div className="mt-12">
                    <h3 className="text-xl font-semibold text-brand">Follow Us</h3>
                    <div className="mt-4 flex justify-center gap-6">
                        <a
                            href="https://instagram.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-pink-500 hover:text-pink-400 transition-colors"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://youtube.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-red-600 hover:text-red-500 transition-colors"
                        >
                            <FaYoutube />
                        </a>
                        <a
                            href="https://facebook.com/username"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl text-blue-600 hover:text-blue-500 transition-colors"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
