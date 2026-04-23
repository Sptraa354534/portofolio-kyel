export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo & name */}
          <div className="flex items-center gap-4">
            <span className="font-display text-2xl font-bold text-accent glow-text">
              KRS.
            </span>
            <div>
              <p className="font-display text-xs tracking-widest text-text-main">
                KYEL RUI SAPUTRA SAROINSONG
              </p>
              <p className="text-xs text-text-sub mt-0.5">
                D3 Teknik Informatika · Web Developer · Data Analyst
              </p>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#education", label: "Education" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-display text-xs tracking-widest text-text-sub hover:text-accent transition-colors"
              >
                {l.label.toUpperCase()}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-xs tracking-widest text-muted">
            © {year} — ALL RIGHTS RESERVED
          </p>
          <a
            href="#"
            className="font-display text-xs tracking-widest text-text-sub hover:text-accent transition-colors flex items-center gap-2"
          >
            BACK TO TOP
            <span className="text-accent">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}