// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-6 text-center">
      <img
        src="path/to/your/image.jpg"
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h1 className="text-3xl font-bold mt-4">Saiful Hasan</h1>
      <p className="mt-2">
        Software Engineer with a demonstrated history of developing highly
        scalable and maintainable data-intensive applications.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="mailto:saifulcseng@gmail.com" className="hover:underline">
          Email
        </a>
        <a href="https://linkedin.com/in/imsaiful" className="hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com/imsaiful" className="hover:underline">
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
