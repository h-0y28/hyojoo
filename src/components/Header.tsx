// src/components/Header.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="bg-blue-500 text-white p-6 flex flex-col sm:flex-row items-center">
      <h1 className="text-xl font-bold flex-grow sm:mr-4 text-left">
        Hyo joo's Portfolio
      </h1>
      <nav className="mt-4 sm:mt-0 flex-grow flex justify-center text-lg">
        <Link
          className={`mx-2 ${
            currentPath === "/" ? "text-yellow-200 font-bold" : "text-white"
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`mx-2 ${
            currentPath === "/projects"
              ? "text-yellow-200 font-bold"
              : "text-white"
          }`}
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className={`mx-2 ${
            currentPath === "/contact"
              ? "text-yellow-200 font-bold"
              : "text-white"
          }`}
          to="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
