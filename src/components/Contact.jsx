import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) newErrors.name = "Veuillez entrer votre nom.";
    if (!email.trim()) newErrors.email = "Veuillez entrer votre email.";
    if (!message.trim()) newErrors.message = "Veuillez entrer un message.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    console.log("Formulaire valide et envoyé !");
  };

  return (
    <section id="contact" className="my-16">
      <h2 className="text-3xl font-bold text-primary-dark mb-8">Contact</h2>

      <form
        className="max-w-lg mx-auto flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">Nom</label>
          <input
            id="name"
            type="text"
            placeholder="Votre nom"
            className="border border-dark rounded px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Votre email"
            className="border border-dark rounded px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1 font-medium">Message</label>
          <textarea
            id="message"
            placeholder="Votre message"
            rows="5"
            className="border border-dark rounded px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && (
            <p className="text-red-600 text-sm mt-1">{errors.message}</p>
          )}
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
