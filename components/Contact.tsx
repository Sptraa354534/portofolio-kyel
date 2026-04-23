"use client";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("Kyelrui321@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-28 px-6 border-t border-border bg-surface"
    >
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">06 — KONTAK</p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Kiri: teks + email */}
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
              Mari{" "}
              <span className="text-accent glow-text">
                Bekerja
                <br />
                Sama
              </span>
            </h2>
            <p className="text-text-sub leading-relaxed mb-10">
              Saya terbuka untuk peluang kerja, kolaborasi project, atau sekadar
              diskusi seputar teknologi. Jangan ragu untuk menghubungi saya
              melalui email di bawah!
            </p>

            {/* Email card */}
            <div className="border border-border bg-bg p-6 hover:border-accent/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-12 h-0.5 bg-accent" />

              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 border border-border flex items-center justify-center text-xl group-hover:border-accent/40 transition-all">
                  📧
                </div>
                <div>
                  <div className="text-xs font-display tracking-widest text-text-sub mb-0.5">
                    EMAIL
                  </div>
                  <div className="text-base text-text-main font-medium">
                    Kyelrui321@gmail.com
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href="mailto:Kyelrui321@gmail.com"
                  className="flex-1 text-center bg-accent text-bg font-display text-xs tracking-widest py-3 hover:bg-accent-dim transition-all"
                >
                  KIRIM EMAIL
                </a>
                <button
                  onClick={copyEmail}
                  className="flex-1 text-center border border-border text-text-sub font-display text-xs tracking-widest py-3 hover:border-accent hover:text-accent transition-all"
                >
                  {copied ? "TERSALIN! ✓" : "SALIN EMAIL"}
                </button>
              </div>
            </div>
          </div>

          {/* Kanan: form kirim pesan */}
          <div className="border border-border bg-bg p-8 relative">
            <div className="absolute top-0 left-0 w-16 h-0.5 bg-accent" />
            <h3 className="font-display text-sm tracking-widest text-text-main mb-6">
              KIRIM PESAN
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-display tracking-widest text-text-sub mb-2">
                  NAMA
                </label>
                <input
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full bg-surface border border-border text-text-main text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-text-sub/40"
                />
              </div>
              <div>
                <label className="block text-xs font-display tracking-widest text-text-sub mb-2">
                  EMAIL ANDA
                </label>
                <input
                  type="email"
                  placeholder="email@anda.com"
                  className="w-full bg-surface border border-border text-text-main text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-text-sub/40"
                />
              </div>
              <div>
                <label className="block text-xs font-display tracking-widest text-text-sub mb-2">
                  PESAN
                </label>
                <textarea
                  rows={4}
                  placeholder="Halo Kyel, saya ingin..."
                  className="w-full bg-surface border border-border text-text-main text-sm px-4 py-3 outline-none focus:border-accent transition-colors resize-none placeholder:text-text-sub/40"
                />
              </div>
              <a
                href="mailto:Kyelrui321@gmail.com?subject=Pesan dari Portfolio"
                className="w-full block text-center bg-accent text-bg font-display text-xs tracking-widest px-6 py-4 hover:bg-accent-dim transition-all"
              >
                KIRIM VIA EMAIL
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}