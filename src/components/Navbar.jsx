import React, { useState } from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { images } from "../assets/assetsMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-12 bg-dark text-primary shadow relative">
      <div className="flex flex-row items-center space-x-4">
        <img
          src={images.logo}
          alt="Mon Logo"
          className="h-10 md:h-14 w-auto rounded-4xl"
        />
        <span className="text-2xl md:text-3xl font-bold">Holleville Kévin</span>
      </div>

      <ul className="hidden md:flex space-x-6 text-primary font-medium">
        <NavLink text="Accueil" to="/" />
        <NavLink text="À propos" href="#about" />
        <NavLink text="Projets" href="#projets" />
        <NavLink text="Compétences" href="#skills" />
        <NavLink text="Parcours" href="#lifepath" />
        <NavLink text="Contact" href="#contact" />
      </ul>
      <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
        {!open && <FontAwesomeIcon icon={faBars} className="w-8 h-8" />}
        {open && <FontAwesomeIcon icon={faXmark} className="w-8 h-8" />}
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-dark text-primary shadow-lg md:hidden z-50">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <NavLink text="Accueil" to="/" onClick={() => setOpen(false)} />
            <NavLink text="À propos" href="#about" onClick={() => setOpen(false)} />
            <NavLink text="Projets" href="#projets" onClick={() => setOpen(false)} />
            <NavLink text="Compétences" href="#skills" onClick={() => setOpen(false)} />
            <NavLink text="Parcours" href="#lifepath" onClick={() => setOpen(false)} />
            <NavLink text="Contact" href="#contact" onClick={() => setOpen(false)} />
          </ul>
        </div>
      )}
    </nav>
  );
}
