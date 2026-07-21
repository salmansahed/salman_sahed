import { HiBadgeCheck } from "react-icons/hi";
import { HiSparkles } from "react-icons/hi2";

// Frontend Skills Data
const frontendSkills = [
  { name: "HTML5", level: "Expert" },
  { name: "CSS3", level: "Expert" },
  { name: "Tailwind CSS", level: "Expert" },
  { name: "JavaScript", level: "Expert" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "React.js", level: "Expert" },
  { name: "Next.js", level: "Expert" },
];

// Backend Skills Data
const backendSkills = [
  { name: "Node.js", level: "Expert" },
  { name: "Express.js", level: "Expert" },
  { name: "MongoDB", level: "Expert" },
  { name: "JWT", level: "Expert" },
  { name: "Better Auth", level: "Expert" },
  { name: "Docker", level: "Learning" },
];

const Skills = () => {
  return (
    <section
      className="relative max-w-6xl mx-auto py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20 overflow-hidden"
      id="skills"
    >
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse delay-700" />

      {/* 2. Cyber Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-3">
          <HiSparkles className="text-amber-500" />
          <span>MY CAPABILITIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Technical{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Skills
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 mt-2 max-w-md">
          My Proficiency & Skill Levels
        </p>
      </div>

      {/* 3. Skills Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Frontend Developer Card */}
        <div className="flex flex-col p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-white/3 border border-black/7 dark:border-white/10 shadow-xl backdrop-blur-2xl hover:border-blue-500/30 dark:hover:border-blue-400/30 transition-all duration-300 group">
          <div className="border-b border-black/5 dark:border-white/10 pb-4 mb-6 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Frontend Development
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-3.5">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-100/60 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-blue-500/30 dark:hover:border-purple-400/30 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="p-1.5 rounded-xl bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 shrink-0">
                  <HiBadgeCheck className="text-lg sm:text-xl" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 truncate">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Developer Card */}
        <div className="flex flex-col p-6 sm:p-8 rounded-3xl bg-white/60 dark:bg-white/3 border border-black/7 dark:border-white/10 shadow-xl backdrop-blur-2xl hover:border-purple-500/30 dark:hover:border-purple-400/30 transition-all duration-300 group">
          <div className="border-b border-black/5 dark:border-white/10 pb-4 mb-6 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              Backend Development
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-y-4 gap-x-3.5">
            {backendSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-2.5 rounded-2xl bg-slate-100/60 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:border-purple-500/30 dark:hover:border-pink-400/30 hover:shadow-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="p-1.5 rounded-xl bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 shrink-0">
                  <HiBadgeCheck className="text-lg sm:text-xl" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 truncate">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
