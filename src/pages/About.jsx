import React from "react";
import Avatar from "../assets/avatar.svg";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-gray-700 flex flex-col md:flex-row items-center justify-center px-8 py-16"
    >
      {/* Left: Text Content */}
      <div
        data-aos="fade-left"
        className="md:w-1/2 text-center md:text-left text-white"
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">
          About Me
        </h2>
        <p className="text-xl sm:text-2xl text-white leading-relaxed mb-6">
          I'm a passionate software developer skilled in{" "}
          <span className="text-purple-600">React.js</span> and{" "}
          <span className="text-green-600">Node.js</span>. I enjoy building
          dynamic web applications that are not only functional but also
          user-friendly and responsive.
        </p>
        <p className="text-xl sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          With experience in both front-end and back-end development, I strive
          to create seamless experiences for users while solving complex
          problems. I am constantly learning and exploring new technologies to
          expand my skill set.
        </p>
      </div>

      {/* Right: Avatar Image */}
      <div
        data-aos="fade-left"
        className="mt-8 md:mt-0 md:w-1/3 flex justify-center"
      >
        <img
          src={Avatar}
          alt="Avatar"
          className="w-[150px] sm:w-[200px] md:w-[300px] rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
