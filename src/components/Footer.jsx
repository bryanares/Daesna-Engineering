import React from "react";
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-brand-dark text-slate-200 py-6">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-3 gap-6">

                {/* Brand / Logo (left aligned) */}
                <div className="text-center sm:text-left">
                    <a
                        href="#home"
                        className="text-xl font-bold text-white hover:text-brand-light transition-colors"
                    >
                        Daesna Engineering
                    </a>
                    <p className="mt-1 text-sm text-slate-400">
                        Reviving Wings, Crafting Dreams.
                    </p>
                </div>

                {/* Quick Links (centered, 2x2 grid) */}
                <div className="text-center">
                    <h4 className="font-semibold text-white mb-2">Quick Links</h4>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2 justify-center text-slate-300 text-sm">
                        <a href="#home" className="hover:text-brand-light transition-colors">Home</a>
                        <a href="#services" className="hover:text-brand-light transition-colors">Our Services</a>
                        <a href="#portfolio" className="hover:text-brand-light transition-colors">Portfolio</a>
                        <a href="#droneclub" className="hover:text-brand-light transition-colors">Drone Club</a>
                    </div>
                </div>

                {/* Social Media (right aligned) */}
                <div className="text-center sm:text-right">
                    <h4 className="font-semibold text-white mb-2">Follow Us</h4>
                    <div className="flex justify-center sm:justify-end gap-3 text-lg">
                        <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer"
                            className="hover:text-pink-400 transition-colors"><FaInstagram /></a>
                        <a href="https://youtube.com/username" target="_blank" rel="noopener noreferrer"
                            className="hover:text-red-500 transition-colors"><FaYoutube /></a>
                        <a href="https://facebook.com/username" target="_blank" rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors"><FaFacebook /></a>
                        <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer"
                            className="hover:text-sky-500 transition-colors"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-6 border-t border-slate-700 pt-3 text-center text-xs text-slate-400">
                © {new Date().getFullYear()} Daesna Engineering. All rights reserved.
            </div>
        </footer>
    );
}
