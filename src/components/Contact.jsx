// Contact.jsx
// Contact section with call-to-action

function Contact() {
  return (
    <section id="contact" className="mb-24">
      <h2 className="text-sm uppercase tracking-widest text-emerald-400 mb-4 lg:hidden">
        Contact
      </h2>

      <h2 className="hidden lg:block text-2xl font-bold text-slate-100 mb-6">
        Contact
      </h2>

      <div className="text-slate-300 leading-relaxed space-y-4">
        <p>
          I'm currently open to frontend positions, freelance projects, and collaboration — both local and remote. If you have a project you'd like to discuss, or just want to say hi — reach out.
        </p>

        <p>
          Fastest way to reach me is via email or LinkedIn.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <a
          href="mailto:kresimir.rusnov@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 transition font-mono text-sm"
        >
          Send email →
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