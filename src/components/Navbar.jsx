import { useState } from "react"

const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Drone Club", href: "#droneclub" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
]

function Navbar() {
    // Track whether the mobile menu is open
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm shadow-sm relative">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">

                {/* --- Logo (left) --- */}
                <a href="#home" className="flex items-center gap-2">
                    {/* Placeholder logo: a blue box with D. Replace with real logo image later. */}
                    <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-900 to-blue-500 flex items-center justify-center text-white font-bold">
                        D
                    </div>
                    <span className="font-semibold text-slate-800">Daesna</span>
                </a>

                {/* --- Hamburger toggle button (right) --- */}
                <button
                    className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setOpen((s) => !s)} // toggle open state
                    aria-label="Toggle menu"
                    aria-expanded={open}
                >
                    {open ? (
                        // X (close) icon
                        <svg
                            className="h-6 w-6 text-slate-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg
                            className="h-6 w-6 text-slate-800"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* --- Mobile/Dropdown menu --- */}
            {open && (
                <div
                    className="absolute top-full left-0 right-0 origin-top animate-slideDown bg-white shadow-lg border-t border-slate-200"
                >
                    <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block py-2 text-slate-700 hover:text-blue-700 transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}



        </header>
    )
}

export default Navbar
