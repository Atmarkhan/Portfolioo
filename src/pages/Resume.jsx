import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Ensure the animation only happens once
      offset: 100, // Adjust this if necessary
    });
  }, []);

  return (
    <section
      id="resume"
      className="w-full min-h-screen bg-gray-700 text-white flex flex-col justify-center items-center py-16 px-8"
    >
      {/* Resume Section Header */}
      <div data-aos="fade-left" className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">
          Resume
        </h2>
        <p className="text-lg mt-4">Take a look at my professional journey!</p>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        {/* Download Resume Button */}
        <div className="mt-8 text-center">
          <a
            href="/My_Resume.pdf" // Replace with the actual path to your resume
            download="My_Resume.pdf"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-lg font-medium transition duration-300"
          >
            <FaDownload className="mr-2" />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
