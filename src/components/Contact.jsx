export default function Contact() {
  return (
    <section id="contact" className="my-16">
      <h2 className="text-3xl font-bold text-primary-dark mb-8">Contact</h2>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">
            Nom
          </label>
          <input
            id="name"
            type="text"
            placeholder="Votre nom"
            className="border border-dark rounded px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Votre email"
            className="border border-dark rounded px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Votre message"
            rows="5"
            className="border border-dark rounded px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            required
          ></textarea>
        </div>

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
