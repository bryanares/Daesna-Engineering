import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from "react-icons/fa";
import Container from "./utils/Container";

export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-white">
            <Container className="max-w-3xl mx-auto px-4 text-center">
                {/* Heading */}
                <h2 className="text-3xl font-bold text-center text-[#1E3A8A] relative inline-block">
                    Get in Touch
                    <span className="block h-1 w-16 bg-blue-600 mx-auto mt-2 rounded"></span>
                </h2>

                <p className="mt-4 text-lg text-slate-600">
                    Have a project in mind or want to join our Drone Club? Reach out to us —
                    we’d love to hear from you.
                </p>

                {/* Contact Info */}
                <div className="mt-8 space-y-4">
                    <p className="text-lg flex items-center justify-center gap-2">
                        <FaPhone className="text-blue-600" />
                        <a href="tel:+254700123456" className="hover:underline">+254 700 123456</a>
                    </p>
                    <p className="text-lg flex items-center justify-center gap-2">
                        <FaEnvelope className="text-blue-600" />
                        <a href="mailto:info@daesna.com" className="hover:underline">info@daesna.com</a>
                    </p>
                </div>

                {/* Social Links */}
                <div className="mt-6 flex justify-center gap-6 text-3xl text-blue-600">
                    <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-800">
                        <FaFacebook />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="hover:text-pink-600">
                        <FaInstagram />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="hover:text-red-600">
                        <FaYoutube />
                    </a>
                </div>
            </Container>
        </section>
    );
}
