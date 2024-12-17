import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-700 text-white py-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xl sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          &copy; {new Date().getFullYear()} Atmar Momand. All rights reserved.
        </p>
        <p className="text-xl sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Designed and Developed by <strong>Atmar Momand</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
