import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Drone Club", href: "#droneclub" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-blue-700">Daesna Engineering</div>

                {/* Hamburger (always visible) */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-2xl text-blue-700"
                >
                    <FaBars />
                </button>
            </div>

            {/* Sidebar Panel */}
            {isOpen && (
                <div>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Panel */}
                    <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col p-6">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="self-end text-2xl text-blue-700 mb-8"
                        >
                            <FaTimes />
                        </button>

                        <ul className="space-y-6 text-blue-700 font-semibold">
                            {links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="hover:text-blue-500 transition"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}


// import { useState } from "react"
// import Container from "./utils/Container"

// const NAV_LINKS = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Services", href: "#services" },
//     { name: "Drone Club", href: "#droneclub" },
//     { name: "Portfolio", href: "#portfolio" },
//     { name: "Contact", href: "#contact" },
// ]

// function Navbar() {
//     // Track whether the mobile menu is open
//     const [open, setOpen] = useState(false)

//     return (
//         <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm shadow-sm relative">
//             <Container className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

//                 {/* --- Logo (left) --- */}
//                 <a href="#home" className="flex items-center gap-2">
//                     {/* Placeholder logo: a blue box with D. Replace with real logo image later. */}
//                     <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-900 to-blue-500 flex items-center justify-center text-white font-bold">
//                         D
//                     </div>
//                     <span className="font-semibold text-slate-800">Daesna</span>
//                 </a>

//                 {/* --- Hamburger toggle button (right) --- */}
//                 <button
//                     className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     onClick={() => setOpen((s) => !s)} // toggle open state
//                     aria-label="Toggle menu"
//                     aria-expanded={open}
//                 >
//                     {open ? (
//                         // X (close) icon
//                         <svg
//                             className="h-6 w-6 text-slate-800"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     ) : (
//                         // Hamburger icon
//                         <svg
//                             className="h-6 w-6 text-slate-800"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                         </svg>
//                     )}
//                 </button>
//             </Container>

//             {/* --- Mobile/Dropdown menu --- */}
//             {open && (
//                 <Container
//                     className="absolute top-full left-0 right-0 origin-top animate-slideDown bg-white shadow-lg border-t border-slate-200"
//                 >
//                     <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
//                         {NAV_LINKS.map((link) => (
//                             <a
//                                 key={link.href}
//                                 href={link.href}
//                                 className="block py-2 text-slate-700 hover:text-blue-700 transition-colors"
//                                 onClick={() => setOpen(false)}
//                             >
//                                 {link.name}
//                             </a>
//                         ))}
//                     </div>
//                 </Container>
//             )}



//         </header>
//     )
// }

// export default Navbar
