import React, { useState } from "react";
import { skillsList } from "../data/skillsData";

export default function Skills() {
  return (
    <section id="competences" className="my-16">
      <h2 className="text-3xl font-bold text-primary mb-8">Compétences</h2>

      <div className="grid grid-cols-2 gap-8">
        <div className="grid grid-cols-6 gap-6">
          {skillsList.map((skill, idx) => (
            <div
              key={idx}
              className="w-24 h-24 border border-black rounded-xl flex flex-col items-center justify-center bg-white
                         shadow-sm hover:shadow-md transition relative group"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 
                              transition flex items-center justify-center rounded-xl"
              >
                <span className="text-white font-bold">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>

          {/* 2e section a compléter avec ??? */}
        <div className="flex items-center justify-center border border-dashed border-gray-400 rounded-xl p-6">
        </div>
      </div>
    </section>
  );
}
