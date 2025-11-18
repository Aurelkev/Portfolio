export default function Skills() {
  const skills = ["React", "TailwindCSS", "Vite", "JavaScript", "HTML", "CSS"];

  return (
    <section id="competences" className="my-16">
      <h2 className="text-3xl font-bold text-primary mb-8">Compétences</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-4 py-2 bg-dark text-white rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
