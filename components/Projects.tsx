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
  thumbnail: string;       // Gambar utama untuk preview di header
  images: string[];        // Galeri gambar di expanded detail
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
    thumbnail: "/project%201/Dashboard.jpeg",
    images: [
      "/project%201/login.jpeg",
      "/project%201/Registrasi.jpeg",
      "/project%201/Dashboard.jpeg",
      "/project%201/Input%20Barang%20Masuk.jpeg",
      "/project%201/Daftar%20Barang%20Masuk.jpeg",
      "/project%201/Edit%20Data%20Barang%20Masuk.jpeg",
      "/project%201/Tambah%20Stok%20Barang.jpeg",
      "/project%201/Mengeluarkan%20Data%20Barang%20Masuk.jpeg",
      "/project%201/Daftar%20Barang%20Keluar.jpeg",
      "/project%201/Scan%20Barcode%20Barang.jpeg",
      "/project%201/Cetak%20Data%20Barang.jpeg",
    ],
  },
  {
    id: 2,
    number: "02",
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
    thumbnail: "/project%202/Halaman%20Utama.jpeg",
    images: [
      "/project%202/Halaman%20Utama.jpeg",
      "/project%202/Fitur%20Cek%20Resi.jpeg",
      "/project%202/Tampilan%20Hasil%20Cek%20Resi.jpeg",
      "/project%202/Pop%20Up%20Whatsapp%20Chatbot.jpeg",
      "/project%202/Chatbot%20Whatsapp.jpeg",
    ],
  },
  {
    id: 3,
    number: "03",
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
    thumbnail: "/project%203/Landing%20Page.jpeg",
    images: [
      "/project%203/Landing%20Page.jpeg",
      "/project%203/Halaman%20Login.jpeg",
      "/project%203/Halaman%20Register.jpeg",
      "/project%203/Halaman%20Konfirmasi%20Lupa%20Password.jpeg",
      "/project%203/Halaman%20Reset%20Password.jpeg",
      "/project%203/Tracking%20Barang%20Tanpa%20Login.jpeg",
      "/project%203/Tracking%20Barang%20Dengan%20Login.jpeg",
      "/project%203/Halaman%20Informasi%20Tracking%20Cekresi%20Barang.jpeg",
      "/project%203/Menu%20Chatbot%20Whatsapp.jpeg",
      "/project%203/Interaksi%20Chatbot%20Whatsapp.jpeg",
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const handleProjectClick = (id: number) => {
    if (activeProject === id) {
      setActiveProject(null);
    } else {
      setActiveProject(id);
      setActiveImageIndex(0); // reset ke foto pertama saat buka project baru
    }
  };

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
              onClick={() => handleProjectClick(project.id)}
            >
              {/* Header row */}
              <div className="flex items-center gap-6 p-6 group">
                <span className="font-display text-4xl text-border group-hover:text-accent/40 transition-colors min-w-[3.5rem]">
                  {project.number}
                </span>

                {/* Thumbnail */}
                <div className="hidden sm:block flex-shrink-0 w-16 h-16 overflow-hidden border border-border group-hover:border-accent/40 transition-colors">
                  <img
                    src={project.thumbnail}
                    alt={`Thumbnail ${project.title}`}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      // Tampilkan fallback jika gambar belum ada
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).parentElement!.innerHTML =
                        `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#1a1a1a;color:#444;font-size:10px;text-align:center;padding:4px;">${project.number}</div>`;
                    }}
                  />
                </div>

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
                    {/* Description + highlights */}
                    <div>
                      <p className="text-text-sub text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="text-accent mt-0.5 text-xs">▸</span>
                            <span className="text-text-sub text-sm">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech stack detail */}
                    <div className="space-y-6">
                      <div>
                        <p className="section-label mb-3">BACKEND / DATABASE</p>
                        <div className="flex flex-wrap gap-2">
                          {project.backendStack.map((t) => (
                            <span key={t} className="tech-tag border-accent/30 text-accent/70">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="section-label mb-3">FRONTEND</p>
                        <div className="flex flex-wrap gap-2">
                          {project.frontendStack.map((t) => (
                            <span key={t} className="tech-tag">{t}</span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="section-label mb-3">FULL STACK</p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((t) => (
                            <span key={t} className="tech-tag">{t}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── GALERI FOTO ── */}
                  <div className="mt-8" onClick={(e) => e.stopPropagation()}>
                    <p className="section-label mb-4">SCREENSHOT PROJECT</p>

                    {/* Foto utama yang sedang aktif */}
                    <div className="w-full border border-border overflow-hidden mb-3 bg-[#0e0e0e] flex items-center justify-center">
                      <img
                        src={project.images[activeImageIndex]}
                        alt={`Screenshot ${activeImageIndex + 1} — ${project.title}`}
                        className="w-full h-auto object-contain max-h-[600px]"
                        onError={(e) => {
                          const el = e.target as HTMLImageElement;
                          el.style.display = "none";
                          el.parentElement!.innerHTML = `
                            <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#333;gap:8px;">
                              <span style="font-size:32px;">🖼️</span>
                              <span style="font-size:11px;font-family:monospace;">Ganti path gambar di data project</span>
                            </div>`;
                        }}
                      />
                    </div>

                    {/* Thumbnail strip */}
                    <div className="flex gap-2 overflow-x-auto pb-1">
                      {project.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveImageIndex(idx)}
                          className={`flex-shrink-0 w-20 h-14 border overflow-hidden transition-all ${
                            activeImageIndex === idx
                              ? "border-accent opacity-100"
                              : "border-border opacity-40 hover:opacity-70"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumb ${idx + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const el = e.target as HTMLImageElement;
                              el.style.display = "none";
                              el.parentElement!.style.background = "#1a1a1a";
                              el.parentElement!.innerHTML += `<span style="display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:10px;color:#444;">${idx + 1}</span>`;
                            }}
                          />
                        </button>
                      ))}
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