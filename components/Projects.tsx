"use client";
import { useState } from "react";

type Project = {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  backendStack: string[];
  frontendStack: string[];
  highlights: string[];
  type: string;
  year: string;
};

const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "Aplikasi Tracking Penyimpanan Barang — Barcode Scanner",
    subtitle: "Gudang Distro Vruzier",
    description:
      "Sistem pelacakan barang berbasis website yang efisien dan real-time menggunakan metode scan barcode. Memudahkan pencarian barang, mengatur posisi rak di gudang, serta mencatat barang masuk dan keluar secara otomatis.",
    stack: ["PHP", "CodeIgniter", "MySQL", "HTML/CSS", "JavaScript", "UML"],
    backendStack: ["PHP", "CodeIgniter", "MySQL", "Barcode API"],
    frontendStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    highlights: [
      "Scan barcode real-time untuk identifikasi barang",
      "Sistem rak dinamis — pengaturan posisi barang otomatis",
      "Pencatatan barang masuk & keluar dengan logging",
      "Rancangan sistem menggunakan metode UML",
      "Laporan stok barang berbasis web",
    ],
    type: "Web App",
    year: "2024",
  },
  {
    id: 2,
    number: "02",
    title: "Aplikasi Tracking Barang & Chatbot WhatsApp NLP",
    subtitle: "Layanan Service & Logistik",
    description:
      "Sistem tracking barang menggunakan nomor resi dari kurir ekspedisi, dipadukan dengan chatbot WhatsApp berbasis NLP yang menjawab pertanyaan terkait tracking dan layanan service secara otomatis.",
    stack: ["PHP", "MySQL", "NLP", "WhatsApp API", "CodeIgniter", "UML", "API Barang"],
    backendStack: ["PHP", "MySQL", "NLP Algorithm", "WhatsApp Business API"],
    frontendStack: ["HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Integrasi tracking barang via nomor resi kurir",
      "Chatbot WhatsApp otomatis berbasis NLP",
      "Jawaban real-time untuk pertanyaan service & tracking",
      "Mengurangi beban customer service secara signifikan",
      "Arsitektur sistem dirancang dengan UML",
    ],
    type: "Web App + Chatbot",
    year: "2025",
  },
  {
    id: 3,
    number: "03",
    title: "Tracking Barang + Chatbot — Website & Layanan Logistik",
    subtitle: "Sistem Informasi Logistik",
    description:
      "Pengembangan sistem pelacakan barang berbasis website yang transparan dan relevan, dilengkapi chatbot responsif untuk mengurangi ketergantungan pada customer service. Mencakup perancangan data dengan UML dan pengembangan sistem penuh.",
    stack: ["PHP", "CodeIgniter", "MySQL", "UML", "JavaScript", "CSS"],
    backendStack: ["PHP", "CodeIgniter", "MySQL", "REST API"],
    frontendStack: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    highlights: [
      "Sistem tracking real-time yang transparan dan akurat",
      "Layanan chatbot responsif untuk pertanyaan logistik",
      "Peningkatan kualitas layanan melalui otomasi",
      "Rancangan data dan alur sistem menggunakan UML",
      "Database pencatatan pengiriman terintegrasi",
    ],
    type: "Web App",
    year: "2024",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">03 — PROJECT</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Karya <span className="text-accent">Saya</span>
          </h2>
          <p className="text-text-sub max-w-sm text-sm leading-relaxed">
            Berikut adalah project-project yang telah saya kerjakan selama
            perkuliahan dan magang.
          </p>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-border hover:border-accent/50 transition-all cursor-pointer overflow-hidden"
              onClick={() =>
                setActiveProject(
                  activeProject === project.id ? null : project.id
                )
              }
            >
              {/* Header row */}
              <div className="flex items-center gap-6 p-6 group">
                <span className="font-display text-4xl text-border group-hover:text-accent/40 transition-colors min-w-[3.5rem]">
                  {project.number}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="font-display text-base md:text-lg text-text-main group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="tech-tag text-accent border-accent/40">
                      {project.type}
                    </span>
                    <span className="tech-tag">{project.year}</span>
                  </div>
                  <p className="text-xs text-text-sub font-display tracking-widest">
                    {project.subtitle.toUpperCase()}
                  </p>
                </div>
                <div className="hidden md:flex flex-wrap gap-2 max-w-xs">
                  {project.stack.slice(0, 4).map((s) => (
                    <span key={s} className="tech-tag">
                      {s}
                    </span>
                  ))}
                </div>
                <div
                  className="text-accent text-xl transition-transform duration-300"
                  style={{
                    transform:
                      activeProject === project.id ? "rotate(45deg)" : "none",
                  }}
                >
                  +
                </div>
              </div>

              {/* Expanded detail */}
              {activeProject === project.id && (
                <div className="px-6 pb-8 border-t border-border animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    {/* Description */}
                    <div>
                      <p className="text-text-sub text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="text-accent mt-0.5 text-xs">
                              ▸
                            </span>
                            <span className="text-text-sub text-sm">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack detail */}
                    <div className="space-y-6">
                      <div>
                        <p className="section-label mb-3">
                          BACKEND / DATABASE
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.backendStack.map((t) => (
                            <span
                              key={t}
                              className="tech-tag border-accent/30 text-accent/70"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="section-label mb-3">FRONTEND</p>
                        <div className="flex flex-wrap gap-2">
                          {project.frontendStack.map((t) => (
                            <span key={t} className="tech-tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="section-label mb-3">FULL STACK</p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((t) => (
                            <span key={t} className="tech-tag">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
