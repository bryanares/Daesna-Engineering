import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from "./components/About"
import Services from "./components/Services"
import DroneClub from "./components/Droneclub"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="font-sans antialiased bg-slate-50"
    >
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Hero />
        <About />
        <Services />
        <DroneClub />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

