import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 200,
      disable: "phone",
    });
    window.addEventListener("scroll", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div>
      <Navbar />

      {/* Home Section */}
      <Home />
      {/* About Section */}
      <About />

      {/* Skills section */}
      <Skills />

      {/* Resume Section */}
      <Resume />

      {/* Contact Section */}

      <Contact />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
