import React from "react";
import "./home.css";
import Type from "./Type.jsx";
import HomeImage from "../assets/home-main.svg";

function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen bg-gray-700 flex flex-col md:flex-row items-center justify-center text-white px-8 md:px-12 relative"
    >
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-purple-600">Hi</span>{" "}
          <span className="text-white-600"> There! 👋🏻</span>
          <br />
          <span className="text-white-600">I'M</span>
          <span className="text-purple-600"> Atmar Momand</span>
        </h1>
        <h2 className="text-3xl">
          <Type />
        </h2>
        <p className="mt-6 text-lg">Scroll down to learn more about me...</p>
      </div>

      {/* Home Image */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={HomeImage}
          alt="Home main"
          className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[600px]"
        />
      </div>
    </section>
  );
}

export default Home;
