export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 md:px-12 bg-dark text-primary shadow">
      <div className="text-2xl font-bold text-primary">MonLogo</div>
      <ul className="flex space-x-6 text-primary font-medium">
        <li>
          <a href="#accueil" className="hover:text-accent transition">
            Accueil
          </a>
        </li>
        <li>
          <a href="#apropos" className="hover:text-accent transition">
            À propos
          </a>
        </li>
        <li>
          <a href="#projets" className="hover:text-accent transition">
            Projets
          </a>
        </li>
        <li>
          <a href="#competences" className="hover:text-accent transition">
            Compétences
          </a>
        </li>
        <li>
          <a href="#parcours" className="hover:text-accent transition">
            Parcours
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-accent transition">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
