// src/components/Header.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <aside className="w-64 bg-[#882653] text-white h-screen p-4 fixed top-0 left-0 flex flex-col">
      <h1 className="text-3xl font-bold mb-3 text-white">Menu</h1>
      <hr />
      <nav className="flex flex-col space-y-4 mt-3 ">
        <Link
          className={`text-lg hover:text-pink-200  ${
            currentPath === "/" ? "text-yellow-300 font-bold" : "text-white"
          }`}
          to="/"
        >
          Main
        </Link>
        <Link
          className={`text-lg hover:text-pink-200  ${
            currentPath === "/aboutMe"
              ? "text-yellow-300 font-bold"
              : "text-white"
          }`}
          to="/aboutMe"
        >
          About Me
        </Link>
        {/* <Link
          className={`text-lg hover:text-pink-300  ${
            currentPath === "/projects"
              ? "text-yellow-300 font-bold"
              : "text-white"
          }`}
          to="/projects"
        >
          Projects
        </Link> */}
        {/* <Link
          className={`text-lg hover:text-pink-300  ${
            currentPath === "/contact"
              ? "text-yellow-300 font-bold"
              : "text-white"
          }`}
          to="/contact"
        >
          Contact
        </Link> */}
      </nav>
    </aside>
  );
};

export default Header;
