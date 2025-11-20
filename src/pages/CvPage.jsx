export default function CvPage() {
  return (
    <section className="min-h-screen flex flex-col items-center py-16 bg-white text-dark">
      <h1 className="text-4xl font-bold text-primary mb-10">Mon CV</h1>

      <div className="w-full max-w-3xl bg-white border border-gray-300 rounded-xl p-10 shadow-xl">
        <h2 className="text-2xl font-bold text-primary mb-4">
          Kévin Holleville
        </h2>

        <p className="text-lg mb-6">
          Développeur Front-End junior — Passionné par React, Tailwind et les
          interfaces modernes.
        </p>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-dark mb-2">Compétences</h3>
          <ul className="list-disc pl-6">
            <li>React, Vite, JavaScript</li>
            <li>TailwindCSS, Sass</li>
            <li>UI / UX et Responsive Design</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-dark mb-2">Expériences</h3>
          <p>
            2023–2025 — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec efficitur tortor eget neque vehicula pretium. Phasellus
            maximus metus quam, vel semper turpis rhoncus eget. Proin at ex
            nisi. Pellentesque auctor orci sed enim egestas dictum. Sed
            imperdiet eleifend lacinia. Cras vel tortor nibh. Nunc ligula justo,
            commodo at maximus eu.
          </p>
          <p>
            2020–2023 — Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec efficitur tortor eget neque vehicula pretium. Phasellus
            maximus metus quam, vel semper turpis rhoncus eget. Proin at ex
            nisi. Pellentesque auctor orci sed enim egestas dictum. Sed
            imperdiet eleifend lacinia. Cras vel tortor nibh. Nunc ligula justo,
            commodo at maximus eu.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-dark mb-2">Formation</h3>
          <p>
            2025 — Formation complète Développeur Web Front-End - OpenClassrooms
          </p>
        </div>
      </div>
    </section>
  );
}
