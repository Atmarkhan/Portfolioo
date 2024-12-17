import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Ensure the animation only happens once
      offset: 100, // Adjust this if necessary
    });
  }, []);

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-gray-700 text-white py-12 px-8 flex flex-col justify-start items-center"
    >
      {/* Contact Section Header */}
      <div data-aos="fade-right" className="text-center mb-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">
          Contact Me
        </h2>
        <p className="text-xl sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Feel free to reach out to me!
        </p>
      </div>

      {/* Social Media Icons */}
      <div data-aos="fade-right" className="flex justify-center mt-6 space-x-8">
        {/* Github Icon */}
        <a
          href="https://github.com/Atmarkhan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl text-white hover:text-gray-400"
        >
          <FaGithub />
        </a>
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/atmar-momand-945411184/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl text-white hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        {/* Twitter Icon */}
        <a
          href="https://x.com/Atmarkhan7"
          target="_blank"
          rel="noopener noreferrer"
          className="text-5xl text-white hover:text-blue-400"
        >
          <FaTwitter />
        </a>
      </div>
    </section>
  );
};

export default Contact;
