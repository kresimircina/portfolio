// About.jsx
// "O meni" sekcija

function About() {
  return (
    <section id="about" className="mb-24">
      <h2 className="text-sm uppercase tracking-widest text-emerald-400 mb-4 lg:hidden">
  About
</h2>

<div className="space-y-4 text-slate-300 leading-relaxed">
  <p>
    I came to development late — at age 40, through a frontend developer program at a business education center in Croatia. Before that, I hadn't even considered coding. What drew me in were the instructors: they showed me that behind every web page sits logic I can understand, and tools I can learn to use.
  </p>

  <p>
    After 6 months of learning and practice, I shipped my first client project —{' '}
    <a
      href="https://ivi.hr"
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-400 hover:underline"
    >
      IVI Catering
    </a>
    , a React frontend with a headless WordPress backend. Through that project I went through the full cycle: from design and code to DNS, SSL and production deployment.
  </p>

  <p>
    I'm currently sharpening my React skills and expanding toward full-stack development with Node.js. Open to frontend positions, freelance projects, and collaboration — remote-friendly, based in Vukovar, Croatia.
  </p>
</div>
    </section>
  );
}

export default About;