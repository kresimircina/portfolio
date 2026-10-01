// Sidebar.jsx
// Lijevi fiksni dio: naslov, pozicija, nav, socials

function Sidebar() {
  const navItems = [
    { label: 'O meni', href: '#about' },
    { label: 'Projekti', href: '#projects' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-100">
          Krešimir Rušnov
        </h1>
        <p className="text-lg lg:text-xl text-emerald-400 mt-3">
          Frontend developer
        </p>
        <p className="text-sm text-slate-400 mt-4 max-w-xs">
          Karijeru sam promijenio u 40-oj i već isporučio prvi klijentski projekt. Sljedeći na redu — možda tvoj.
        </p>

        <nav className="mt-12 hidden lg:block">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm uppercase tracking-widest text-slate-400 hover:text-emerald-400 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="flex gap-4 mt-8 lg:mt-0">
        <a
          href="https://github.com/kresimircina"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-emerald-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kresimir-rusnov-760b4995"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-emerald-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:kresimir.rusnov@gmail.com"
          className="text-slate-400 hover:text-emerald-400 transition"
        >
          Email
        </a>
      </div>
    </div>
  );
}

export default Sidebar;