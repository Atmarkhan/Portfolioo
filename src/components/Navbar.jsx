import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FaRegListAlt } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { Link } from "react-scroll"; // Ensure you have installed react-scroll

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const sections = [
    { id: "home", label: "Home", icon: <AiOutlineHome size={20} /> },
    { id: "about", label: "About", icon: <AiOutlineUser size={20} /> },
    { id: "resume", label: "Resume", icon: <FaRegListAlt size={20} /> },
    {
      id: "contact",
      label: "Contact",
      icon: <MdOutlineContactMail size={20} />,
    },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-700 shadow-md z-50">
      {/* Hamburger icon on the right */}
      <div
        className="md:hidden p-4 absolute right-4 top-4 cursor-pointer" // Added cursor-pointer here
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-0.5 bg-white mb-2"></div>
        <div className="w-6 h-0.5 bg-white mb-2"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {/* Menu for desktop (horizontal) */}
      <ul className="hidden md:flex justify-center space-x-8 p-4">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              to={section.id}
              smooth={false}
              duration={0}
              className="flex items-center space-x-2 text-white hover:text-blue-600 cursor-pointer" // Added cursor-pointer here
            >
              {section.icon}
              <span>{section.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu (vertical) */}
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 p-4 bg-gray-700 absolute top-16 right-0 w-full ">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                to={section.id}
                smooth={true}
                duration={0} // Reduced duration for faster scroll
                offset={-60} // Add an offset if needed to prevent the navbar from covering content
                className="flex items-center space-x-2 text-white hover:text-blue-600 cursor-pointer"
              >
                {section.icon}
                <span>{section.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
