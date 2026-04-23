"use client";

const certs = [
  {
    title: "SAP Course",
    issuer: "SAP",
    year: "2024",
    icon: "🏆",
    color: "#00ff88",
  },
  {
    title: "UJIKOM Jaringan Komputer",
    issuer: "UNIVERSITAS LOGISTIK DAN BISNIS INTERNASIONAL",
    year: "2025",
    icon: "🌐",
    color: "#4479A1",
  },
  {
    title: "Sertifikat Magang",
    issuer: "LPM Daarut Tauhiid Bandung",
    year: "2025",
    icon: "📜",
    color: "#7a86b8",
  },
  {
    title: "Sertifikat Magang",
    issuer: "DINAS SOSIAL SULAWESI TENGAH",
    year: "2021",
    icon: "📜",
    color: "#7a86b8",
  },
];

export default function Certifications() {
  return (
    <section className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">05 — SERTIFIKASI</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
          Pengakuan <span className="text-accent">&amp; Sertifikat</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="border border-border bg-surface p-6 hover:border-opacity-60 transition-all group relative overflow-hidden"
              style={{ "--hover-color": cert.color } as React.CSSProperties}
            >
              {/* Accent corner */}
              <div
                className="absolute top-0 right-0 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{
                  background: `radial-gradient(circle at top right, ${cert.color}, transparent)`,
                }}
              />

              <div className="text-3xl mb-4">{cert.icon}</div>
              <div
                className="font-display text-xs tracking-widest mb-2"
                style={{ color: cert.color }}
              >
                {cert.year}
              </div>
              <h3 className="text-sm text-text-main font-medium mb-1 leading-snug">
                {cert.title}
              </h3>
              <p className="text-xs text-text-sub">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
