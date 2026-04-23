"use client";

const education = [
  {
    year: "2022 – 2025",
    institution: "Universitas Logistik dan Bisnis Internasional (ULBI)",
    city: "Bandung",
    major: "D3 Teknik Informatika",
    activities: [
      "Magang di Yayasan Daarut Tauhiid Bandung",
      "Proyek akhir: Sistem Tracking Barang Berbasis Web",
    ],
    current: true,
  },
  {
    year: "2019 – 2022",
    institution: "SMK Negeri 3 Palu",
    city: "Palu, Sulawesi Tengah",
    major: "Teknik Komputer dan Jaringan (TKJ)",
    activities: ["PKL Magang di Dinas Sosial Provinsi Sulawesi Tengah"],
    current: false,
  },
  {
    year: "2016 – 2019",
    institution: "SMP Negeri 2 Palu",
    city: "Palu, Sulawesi Tengah",
    major: "Kelas Khusus Olahraga — Karate",
    gpa: null,
    activities: [
      "O2SN antar Sekolah",
      "Juara Kejuaraan Daerah Karate FORKI Sulawesi Tengah (2017)",
      "Juara Karate Open Tournament Pordibya Kota Palu (2016)",
      "Juara Karate Piala Pordibya Siranindi (2015)",
    ],
    current: false,
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6 border-t border-border bg-surface"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">04 — PENDIDIKAN</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
          Perjalanan <span className="text-accent">Akademik</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`relative md:grid md:grid-cols-2 gap-12 ${
                  i % 2 === 0 ? "" : "md:dir-rtl"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 -translate-x-1/2 border border-accent bg-bg rounded-full z-10" />
                {edu.current && (
                  <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 -translate-x-1/2 border border-accent bg-accent rounded-full z-10 animate-ping opacity-50" />
                )}

                {/* Year label (desktop: alternate sides) */}
                <div
                  className={`pl-8 md:pl-0 ${
                    i % 2 === 0
                      ? "md:text-right md:pr-16"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <span className="font-display text-xs tracking-widest text-accent">
                    {edu.year}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`pl-8 md:pl-0 mt-2 md:mt-0 ${
                    i % 2 === 0 ? "md:pl-16" : "md:col-start-1 md:row-start-1 md:pr-16 md:text-right"
                  }`}
                >
                  <div className="border border-border bg-bg p-6 hover:border-accent/40 transition-all">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <div>
                        <h3 className="font-display text-sm text-text-main mb-1">
                          {edu.institution}
                        </h3>
                        <p className="text-xs text-text-sub">{edu.city}</p>
                      </div>
                      {edu.gpa && (
                        <span className="tech-tag border-accent/40 text-accent whitespace-nowrap">
                          IPK {edu.gpa}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-accent font-medium mb-4">
                      {edu.major}
                    </p>
                    <ul className="space-y-1.5">
                      {edu.activities.map((a, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs text-text-sub"
                        >
                          <span className="text-accent mt-0.5">▸</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
