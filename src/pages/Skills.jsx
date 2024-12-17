import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import {
  FaAngular,
  FaCss3,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiExpress, SiTailwindcss } from "react-icons/si"; // Using icons for Express and Tailwind CSS

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size={40} /> },
    { name: "CSS", icon: <FaCss3 size={40} /> },
    { name: "JavaScript", icon: <FaJs size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Angular", icon: <FaAngular size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "Express.js", icon: <SiExpress size={40} /> },
    { name: "SCSS", icon: <FaSass size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Ensure the animation only happens once
      offset: 200,
    });
  }, []);

  return (
    <section id="skill" className="w-full py-16 bg-gray-700 text-white">
      {/* Skills Section Header */}
      <div className="text-center mb-8" data-aos="fade-right">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">
          Skills
        </h2>
        <p className="text-xl sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Technologies I'm proficient in.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            data-aos="fade-right" // Apply fade-right animation
            className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
          >
            <div className="mb-4 text-5xl">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
