import React from "react";
import { skillsList } from "../data/skillsData";
import { logos } from "../assets/assetsMap";

export default function Skills() {
  return (
    <div
      className="
        grid 
        grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 
        gap-6
      "
    >
      {skillsList.map((skill, idx) => (
        <div
          key={idx}
          className="w-24 h-24 border border-black rounded-xl flex flex-col items-center justify-center bg-white
                     shadow-sm hover:shadow-md transition relative group"
        >
          <img
            src={logos[skill.logo]}
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
  );
}
