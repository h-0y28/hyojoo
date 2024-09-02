// src/pages/Projects.tsx
import React from "react";

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills.",
    link: "#",
  },
  {
    title: "Weather App",
    description:
      "A web app that shows weather information using the OpenWeatherMap API.",
    link: "#",
  },
  {
    title: "To-Do List App",
    description: "A simple to-do list app to keep track of tasks.",
    link: "#",
  },
];

const Projects: React.FC = () => {
  return (
    <main className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
