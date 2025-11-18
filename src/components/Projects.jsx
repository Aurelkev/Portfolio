import React from "react";
import { projectList } from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projets" className="my-16">
      <h2 className="text-3xl font-bold text-primary mb-8">Mes Projets</h2>
      <div className="grid gap-8">
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="border border-dark rounded-lg overflow-hidden bg-white hover:shadow-lg transition flex"
          >
            <div className="p-6 w-[70%]">
              <h3 className="text-xl font-bold text-dark mb-2">
                {project.title}
              </h3>
              <p className="text-dark mb-4">{project.desc}</p>
              <a
                href={project.link}
                className="text-primary hover:text-accent transition"
              >
                Voir le projet
              </a>
            </div>
            <div className="w-[30%] p-6 flex justify-center items-center">
              <img
                src={project.image}
                alt={project.title}
                className="object rounded-xs h-30 w-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
