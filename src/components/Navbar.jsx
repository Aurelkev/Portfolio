import React from "react";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-12 bg-dark text-primary shadow">
      <div className="flex flex-row text-3xl font-bold text-primary items-center space-x-4 gap-x-4">
        <img
          src="./img/logo.jpg"
          alt="MonLogo"
          className="h-15 w-auto rounded-4xl"
        />
        Holleville Kévin
      </div>

      <ul className="flex space-x-6 text-primary font-medium">
        <NavLink text="Accueil" href="#home" />
        <NavLink text="À propos" href="#about" />
        <NavLink text="Projets" href="#projets" />
        <NavLink text="Compétences" href="#skills" />
        <NavLink text="Parcours" href="#skills" />
        <NavLink text="Contact" href="#skills" />
      </ul>
    </nav>
  );
}
