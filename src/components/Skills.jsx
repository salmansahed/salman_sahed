import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

// Frontend Skills Data
const frontendSkills = [
  { name: "HTML5", level: "Expert" },
  { name: "Next.JS", level: "Expert" },
  { name: "CSS", level: "Expert" },
  { name: "Tailwind Css", level: "Expert" },
  { name: "JavaScript", level: "Expert" },
  { name: "React.JS", level: "Expert" },
];

// Backend Skills Data
const backendSkills = [
  { name: "Node.JS", level: "Expert" },
  { name: "JWT", level: "Expert" },
  { name: "Express.JS", level: "Expert" },
  { name: "Docker", level: "Learning" },
  { name: "MongoDB", level: "Expert" },
  { name: "Better Auth", level: "Expert" },
];

const Skills = () => {
  return (
    <section
      className="py-14 md:py-18 px-3 max-w-6xl mx-auto scroll-mt-8"
      id="skills"
    >
      {/* Title Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 transition-colors">
          Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 transition-colors">
          My Technical Level
        </p>
      </div>

      {/* Skills Container */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Frontend Developer Card */}
        <div className="bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/20 rounded-3xl p-8 shadow-[0_0_10px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-200 group">
          <h3 className="text-center text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100 transition-colors">
            Frontend Developer
          </h3>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            {frontendSkills.map((skill, index) => (
              <div key={index} className="flex items-start gap-2">
                <HiBadgeCheck className="text-gray-700 dark:text-gray-100 mt-1 text-xl group-hover:text-amber-500 dark:group-hover:text-yellow-300 transition-all duration-200" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-none transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors">
                    {skill.level}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Developer Card */}
        <div className="bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/20 rounded-3xl p-8 shadow-[0_0_10px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-200 group">
          <h3 className="text-center text-2xl font-semibold mb-8 text-gray-900 dark:text-gray-100 transition-colors">
            Backend Developer
          </h3>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4">
            {backendSkills.map((skill, index) => (
              <div key={index} className="flex items-start gap-2">
                <HiBadgeCheck className="text-gray-700 dark:text-gray-100 mt-1 text-xl group-hover:text-amber-500 dark:group-hover:text-yellow-300 transition-all duration-200" />
                <div>
                  <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100 leading-none transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors">
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
