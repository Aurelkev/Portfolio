export default function Projects() {
  const projectList = [
    { title: "Projet 1", desc: "Description courte", link: "#" },
    { title: "Projet 2", desc: "Description courte", link: "#" },
    { title: "Projet 3", desc: "Description courte", link: "#" },
    { title: "Projet 4", desc: "Description courte", link: "#" },
  ];

  return (
    <section id="projets" className="my-16">
      <h2 className="text-3xl font-bold text-primary mb-8">Mes Projets</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projectList.map((project, idx) => (
          <div
            key={idx}
            className="border border-dark rounded-lg p-6 bg-white hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-dark mb-2">
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
        ))}
      </div>
    </section>
  );
}
