import Image from "next/image";

const Technologies = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center justify-center px-3 py-10 sm:py-16 md:py-20">
      {/* Section Header */}
      <div className="mb-8 space-y-2 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100 transition-colors">
          Technologies
        </h2>
        <p className="text-gray-600 dark:text-gray-300 transition-colors">
          My Tech Stack
        </p>
      </div>

      {/* Tech Stack Glass Card */}
      <div className="bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/20 backdrop-blur-3xl px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-3xl shadow-[0_0_10px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-200">
        <Image
          src="https://skillicons.dev/icons?i=html,css,tailwind,js,react,nextjs,nodejs,express,mongodb,firebase,git,github,vercel,vscode"
          height={800}
          width={800}
          alt="Skill Icons"
          unoptimized
        />
      </div>
    </div>
  );
};

export default Technologies;
