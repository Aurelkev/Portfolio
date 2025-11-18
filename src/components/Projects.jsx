import React, { useState } from "react";
import { projectList } from "../data/projectsData";

export default function ProjectGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projets" className="my-16">
      <h2 className="text-3xl font-bold text-primary mb-8">Mes Projets</h2>
      <div className="grid grid-cols-4 gap-[20px]">
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="relative w-auto h-35 cursor-pointer group overflow-hidden rounded flex justify-center items-center"
            onClick={() => openModal(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-4/5 h-auto transition-transform duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gray-800 opacity-80 rounded"></div>

            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl">
              {project.title}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <>
          <div className="fixed inset-0 z-40" onClick={closeModal}></div>

          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className="bg-white border-3 border-black rounded-lg p-[30px] w-1/2 max-w-2xl relative text-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-black hover:text-gray-700 text-3xl font-bold cursor-pointer"
              >
                &times;
              </button>

              <h3 className="text-2xl font-bold mb-4 text-center text-blue-600">
                {selectedProject.title}
              </h3>

              <p className="mb-6 text-center">{selectedProject.desc}</p>

              <div className="flex justify-center">
                <a
                  href={selectedProject.link}
                  className="bg-primary text-white px-6 py-2 rounded hover:bg-accent transition text-center"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
