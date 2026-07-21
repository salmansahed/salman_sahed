import Image from "next/image";
import { HiSparkles } from "react-icons/hi2";

const techCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "Tools & Deployment",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Vercel", icon: "vercel" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
];

const Technologies = () => {
  return (
    <section
      className="relative max-w-6xl mx-auto py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20 overflow-hidden"
      id="technologies"
    >
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse delay-700" />

      {/* 2. Cyber Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-3">
          <HiSparkles className="text-amber-500" />
          <span>MY POWER HOUSE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Tech{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Stack
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 mt-2 max-w-md">
          Technologies & Tools I Use to Build Products
        </p>
      </div>

      {/* 3. Categorized Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {techCategories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col gap-5 p-6 rounded-3xl bg-white/60 dark:bg-white/3 border border-black/7 dark:border-white/10 shadow-xl backdrop-blur-2xl hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 group"
          >
            {/* Category Header Title */}
            <div className="border-b border-black/5 dark:border-white/10 pb-3">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {cat.category}
              </h3>
            </div>

            {/* Category Skills Grid */}
            <div className="grid grid-cols-2 gap-3.5">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-100/70 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-blue-500/40 dark:hover:border-purple-400/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Skill Icon */}
                  <div className="relative w-8 h-8 shrink-0">
                    <Image
                      src={`https://skillicons.dev/icons?i=${skill.icon}`}
                      alt={skill.name}
                      fill
                      unoptimized
                      className="object-contain"
                    />
                  </div>
                  {/* Skill Name */}
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
