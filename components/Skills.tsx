"use client";

type SkillGroup = {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Backend & Database",
    icon: "⚙️",
    skills: [
      { name: "PHP", level: 80 },
      { name: "MySQL / SQL", level: 85 },
      { name: "CodeIgniter", level: 75 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "HTML & CSS", level: 80 },
      { name: "JavaScript", level: 65 },
    ],
  },
  {
    category: "Data & Analisis",
    icon: "📊",
    skills: [
      { name: "UML (Draw.io / StarUML)", level: 85 },
      { name: "Bizagi (BPMN)", level: 70 },
      { name: "Data Analyst", level: 60 },
    ],
  },
  {
    category: "Tools & Software",
    icon: "🛠️",
    skills: [
      { name: "Visual Studio Code", level: 85 },
      { name: "Microsoft Office", level: 80 },
      { name: "Git / GitHub", level: 65 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "🧠",
    skills: [
      { name: "Komunikasi", level: 85 },
      { name: "Critical Thinking", level: 80 },
      { name: "Manajemen Waktu", level: 78 },
      { name: "Adaptasi", level: 82 },
    ],
  },
];

const techBadges = [
  { name: "PHP", color: "#7a86b8" },
  { name: "MySQL", color: "#4479A1" },
  { name: "CodeIgniter", color: "#DD4814" },
  { name: "HTML5", color: "#E34F26" },
  { name: "CSS3", color: "#1572B6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "SQL", color: "#00758F" },
  { name: "UML", color: "#00ff88" },
  { name: "Bizagi", color: "#00A4E4" },
  { name: "Git", color: "#F05032" },
  { name: "Windows OS", color: "#0078D4" },
  { name: "VS Code", color: "#007ACC" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto">
        <p className="section-label mb-4">02 — KEAHLIAN</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-16">
          Tech <span className="text-accent">Stack</span>
        </h2>

        {/* Tech badges scrolling marquee style */}
        <div className="flex flex-wrap gap-3 mb-16">
          {techBadges.map((t) => (
            <span
              key={t.name}
              className="tech-tag"
              style={{ borderColor: t.color + "44", color: t.color }}
            >
              {t.name}
            </span>
          ))}
        </div>

        {/* Skill groups grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="border border-border bg-bg p-6 hover:border-accent/40 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <span className="font-display text-xs tracking-widest text-text-sub group-hover:text-accent transition-colors">
                  {group.category.toUpperCase()}
                </span>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-text-main">
                        {skill.name}
                      </span>
                      <span className="font-display text-xs text-accent">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-px bg-border relative overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full bg-accent transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
