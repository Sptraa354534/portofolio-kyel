"use client";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left: big text */}
        <div>
          <p className="section-label mb-6">01 — TENTANG SAYA</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8 text-text-main">
            Developer yang{" "}
            <span className="text-accent">suka belajar</span>{" "}
            hal baru.
          </h2>
          <div className="space-y-4 text-text-sub leading-relaxed">
            <p>
              Saya{" "}
              <span className="text-text-main font-medium">
                Kyel Rui Saputra Saroinsong
              </span>
              , lulusan D3 Teknik Informatika dari Universitas Logistik dan
              Bisnis Internasional, Bandung dengan IPK 3.28/4.00.
            </p>
            <p>
              Berpengalaman membangun aplikasi web berbasis PHP & CodeIgniter,
              merancang database dengan SQL, serta membuat dokumentasi sistem
              menggunakan UML. Saya juga antusias di bidang Data Analysis dan
              Data Design.
            </p>
            <p>
              Di luar coding, saya aktif sebagai atlet Karate dan pernah meraih
              berbagai kejuaraan daerah — yang mengajarkan saya disiplin,
              ketangguhan, dan semangat kompetisi.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "+6282312782729",
              "Palu, Sulawesi Tengah",
              "Kyelrui321@gmail.com",
            ].map((info) => (
              <span key={info} className="tech-tag">
                {info}
              </span>
            ))}
          </div>
        </div>

        {/* Right: info card */}
        <div className="relative">
          <div className="border border-border bg-surface p-8 relative z-10">
            <div className="flex items-center justify-between mb-6">
              <span className="font-display text-xs tracking-widest text-accent">
                PROFIL SINGKAT
              </span>
              <span className="text-xs text-text-sub font-display">v1.0</span>
            </div>

            {[
              { key: "Nama", value: "Kyel Rui Saputra Saroinsong" },
              { key: "Pendidikan", value: "D3 Teknik Informatika — ULBI" },
              { key: "GPA", value: "3.28 / 4.00" },
              { key: "Lokasi", value: "Palu, Sulawesi Tengah" },
              { key: "Status", value: "Fresh Graduate 2025" },
              { key: "Fokus", value: "Web Dev & Data Analysis" },
            ].map((item) => (
              <div
                key={item.key}
                className="flex justify-between py-3 border-b border-border last:border-0"
              >
                <span className="text-xs font-display tracking-widest text-text-sub">
                  {item.key.toUpperCase()}
                </span>
                <span className="text-xs text-text-main text-right max-w-[60%]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Decorative offset box */}
          <div className="absolute top-4 left-4 right-[-4px] bottom-[-4px] border border-accent/20 -z-0" />
        </div>
      </div>
    </section>
  );
}
