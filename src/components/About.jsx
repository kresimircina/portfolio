// About.jsx
// "O meni" sekcija

function About() {
  return (
    <section id="about" className="mb-24">
      <h2 className="text-sm uppercase tracking-widest text-emerald-400 mb-4 lg:hidden">
        O meni
      </h2>

      <div className="space-y-4 text-slate-300 leading-relaxed">
        <p>
          Do developmenta sam došao kasno — s 40 godina, kroz program za frontend developere na učilištu za poslovno upravljanje. Prije toga nisam ni razmišljao o kodiranju. Ono što me uvuklo bili su predavači: pokazali su mi da iza svake web stranice stoji logika koju mogu razumjeti, i alati koje mogu naučiti koristiti.
        </p>

        <p>
          Nakon 6 mjeseci učenja i prakse, isporučio sam svoj prvi klijentski projekt —{' '}
          <a
            href="https://ivi.hr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline"
          >
            IVI Catering
          </a>
          , stranica s React frontendom i headless WordPress backendom. Kroz taj projekt sam prošao cijeli ciklus: od dizajna i koda do DNS-a, SSL-a i produkcijskog deploymenta.
        </p>

        <p>
          Trenutno produbljujem znanje Reacta i širim se prema full-stack developmentu s Node.js-om. Otvoren sam za frontend pozicije, freelance projekte i suradnju.
        </p>
      </div>
    </section>
  );
}

export default About;