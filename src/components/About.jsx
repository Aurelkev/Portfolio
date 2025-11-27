import { images } from "../assets/assetsMap";

export default function About() {
  return (
    <section id="about" className="my-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center text-lg leading-relaxed text-dark">
          <h2
            className="text-3xl font-bold mb-6
                         bg-clip-text text-transparent 
                         bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                         drop-shadow-md"
          >
            Développeur Front-end
          </h2>
          <p className="mb-4 drop-shadow-sm transition transform hover:scale-105">
            Je conçois des interfaces modernes avec un souci du détail et de
            l’expérience utilisateur.
          </p>

          <p className="mb-4 drop-shadow-sm transition transform hover:scale-105">
            J’utilise principalement{" "}
            <span className="font-semibold text-primary-dark">React</span>,{" "}
            <span className="font-semibold text-primary-dark">Vite</span>,{" "}
            <span className="font-semibold text-primary-dark">TailwindCSS</span>{" "}
            et je m’intéresse particulièrement aux bonnes pratiques, à la
            performance et à l’accessibilité.
          </p>

          <p className="drop-shadow-sm transition transform hover:scale-105">
            Construire des projets est pour moi le meilleur moyen de progresser,
            d’apprendre de nouvelles technologies et de repousser mes limites.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-60 h-60 rounded-xl overflow-hidden shadow-lg border border-dark">
            <img
              src={images.logo}
              alt="Illustration développeur"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-140"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
