// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import AboutMe from "./pages/aboutMe";
import Main from "./pages/Main";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        <Header />
        <div className="ml-64 flex-1">
          <Routes>
            <Route path="/aboutMe" element={<AboutMe />} />
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
