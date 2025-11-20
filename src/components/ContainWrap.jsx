import React from "react";
import Skills from "./Skills.jsx";
import LifePath from "./LifePath.jsx";

export default function ContainWrap() {
  return (
    <section id="competences" className="my-16">
      <div className="grid grid-cols-2 gap-8">
        <section id="skills">
          <h2 className="text-3xl font-bold text-primary mb-8">Compétences</h2>
          <Skills />
        </section>
        <section id="lifepath">
          <h2 className="text-3xl font-bold text-primary mb-8">Parcours</h2>
          <LifePath />
        </section>
      </div>
    </section>
  );
}
