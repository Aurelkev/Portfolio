export default function LifePath() {
  return (
    <div className="flex flex-col items-center justify-center border border-dashed border-gray-400 rounded-xl p-6 bg-white gap-4">
      <a
        href="/cv"
        className="px-6 py-3 bg-primary-dark text-white font-semibold rounded-lg 
                   hover:bg-primary/80 transition shadow"
      >
        Voir mon CV
      </a>
      <a
        href="/cv.pdf"
        download
        className="px-6 py-3 bg-black text-white font-semibold rounded-lg 
                   hover:bg-black/80 transition shadow"
      >
        Télécharger le CV (PDF)
      </a>
    </div>
  );
}
