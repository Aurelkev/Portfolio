export default function Contact() {
  return (
    <section id="contact" className="my-16">
      <h2 className="text-3xl font-bold text-primary mb-8">Contact</h2>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nom"
          className="border border-dark rounded px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-dark rounded px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
        />
        <textarea
          placeholder="Message"
          rows="5"
          className="border border-dark rounded px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-accent text-white px-6 py-2 rounded hover:bg-accent2 transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
