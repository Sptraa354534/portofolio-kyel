"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  "Web Developer",
  "PHP Programmer",
  "Database Designer",
  "Data Analyst",
  "Backend Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (typing) {
      if (charIndex < currentRole.length) {
        const t = setTimeout(() => {
          setDisplayed((prev) => prev + currentRole[charIndex]);
          setCharIndex((c) => c + 1);
        }, 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
          setCharIndex((c) => c - 1);
        }, 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [typing, charIndex, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center grid-bg overflow-hidden"
    >
      {/* Accent glow blob */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 600,
          height: 600,
          background:
            "radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 relative z-10 w-full">
        {/* Badge */}
        <div className="flex items-center gap-3 mb-8 animate-fade-up">
          <span className="section-label">Based in Palu, Sulawesi Tengah</span>
          <span className="inline-block w-16 h-px bg-accent opacity-50" />
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-text-sub font-display">
              Available for work
            </span>
          </span>
        </div>

        {/* Main content: teks kiri + foto kanan */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* LEFT: Teks */}
          <div className="flex-1">
            {/* Name */}
            <h1
              className="font-display text-5xl md:text-7xl font-bold leading-none mb-4"
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.1s forwards",
              }}
            >
              <span className="text-text-main">KYEL</span>
              <br />
              <span className="text-accent glow-text">SAROINSONG</span>
            </h1>

            {/* Typewriter role */}
            <div
              className="flex items-center gap-2 mb-8 h-10"
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.25s forwards",
              }}
            >
              <span className="text-2xl md:text-3xl text-text-sub font-light">
                /
              </span>
              <span className="text-xl md:text-2xl text-text-main font-display tracking-wide">
                {displayed}
              </span>
              <span className="inline-block w-0.5 h-6 bg-accent animate-blink" />
            </div>

            {/* Short bio */}
            <p
              className="max-w-lg text-text-sub text-base leading-relaxed mb-12"
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.4s forwards",
              }}
            >
              Lulusan D3 Teknik Informatika yang passionate dalam web development,
              database design, dan data analysis. Berpengalaman dengan CodeIgniter,
              PHP, MySQL, dan UML.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-wrap gap-4"
              style={{
                opacity: 0,
                animation: "fadeUp 0.7s ease 0.55s forwards",
              }}
            >
              <a
                href="#projects"
                className="group flex items-center gap-3 bg-accent text-bg font-display text-sm px-8 py-4 tracking-widest hover:bg-accent-dim transition-all"
              >
                LIHAT PROJECT
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: Foto */}
          <div
            className="flex-shrink-0"
            style={{
              opacity: 0,
              animation: "fadeUp 0.7s ease 0.3s forwards",
            }}
          >
            <div className="relative">
              {/* Border dekoratif */}
              <div
                className="absolute inset-0 border border-accent"
                style={{ transform: "translate(10px, 10px)" }}
              />
              {/* Foto */}
              <div className="relative w-56 h-64 md:w-72 md:h-80 overflow-hidden border border-border">
                <Image
                  src="/foto.jpg"
                  alt="Kyel Rui Saputra Saroinsong"
                  fill
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  priority
                />
              </div>
            </div>
          </div>

        </div>

        {/* Stats row */}
        <div
          className="mt-24 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.7s forwards",
          }}
        >
          {[
            { value: "4", label: "Projects" },
            { value: "4+", label: "Sertifikasi" },
            { value: "2025", label: "Fresh Graduate" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-3xl text-accent font-bold">
                {s.value}
              </div>
              <div className="text-xs text-text-sub mt-1 tracking-widest font-display">
                {s.label.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-display tracking-widest text-text-sub">
          SCROLL
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-text-sub to-transparent animate-pulse" />
      </div>
    </section>
  );
}