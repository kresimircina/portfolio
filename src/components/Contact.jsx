// Contact.jsx
// Kontakt sekcija s pozivom na akciju

function Contact() {
  return (
    <section id="contact" className="mb-24">
      <h2 className="text-sm uppercase tracking-widest text-emerald-400 mb-4 lg:hidden">
        Kontakt
      </h2>

      <h2 className="hidden lg:block text-2xl font-bold text-slate-100 mb-6">
        Kontakt
      </h2>

      <div className="text-slate-300 leading-relaxed space-y-4">
        <p>
          Trenutno sam otvoren za frontend pozicije, freelance projekte i suradnju. Ako imaš projekt o kojem bi razgovarali, ili me samo želiš upoznati — javi se.
        </p>

        <p>
          Najbrže me možeš uhvatiti na emailu ili LinkedInu.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:kresimir.rusnov@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 transition font-mono text-sm"
        >
          Pošalji email →
        </a>
        <a
          href="https://www.linkedin.com/in/kresimir-rusnov-760b4995"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-slate-100 transition font-mono text-sm"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Contact;