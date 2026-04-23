"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #1e1e1e" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-sm tracking-widest text-accent glow-text"
        >
          KRS<span className="text-text-sub">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-display text-xs tracking-widest text-text-sub hover:text-accent transition-colors underline-hover"
                onClick={() => setActive(l.href)}
              >
                {l.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="block w-6 h-px bg-accent transition-all"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(3px)" : "none",
            }}
          />
          <span
            className="block w-4 h-px bg-accent transition-all"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-px bg-accent transition-all"
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-bg px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block font-display text-xs tracking-widest text-text-sub hover:text-accent py-3 border-b border-border transition-colors"
            >
              {l.label.toUpperCase()}
            </a>
          ))}
          <a
            href="mailto:Kyelrui321@gmail.com"
            className="mt-4 block text-center border border-accent text-accent font-display text-xs px-4 py-2 hover:bg-accent hover:text-bg transition-all tracking-widest"
          >
            HIRE ME
          </a>
        </div>
      )}
    </nav>
  );
}
