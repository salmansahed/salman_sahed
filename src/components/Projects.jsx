import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Projects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/projects`, {
    cache: "no-store",
  });
  const projectsData = await res.json();

  return (
    <section
      id="projects"
      className="relative max-w-6xl mx-auto py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20 overflow-hidden"
    >
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse delay-700" />

      {/* 2. Cyber Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-3">
          <HiSparkles className="text-amber-500" />
          <span>MY RECENT WORK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Projects
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 mt-2 max-w-md">
          A showcase of my recent full-stack web applications
        </p>
      </div>

      {/* 3. Projects Glass Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id || project._id}
            className="group flex flex-col justify-between rounded-3xl bg-white/60 dark:bg-white/3 border border-white/60 dark:border-white/10 shadow-xl backdrop-blur-2xl hover:border-blue-500/40 dark:hover:border-blue-400/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            <div>
              {/* Responsive Image Frame with Overlay */}
              <div className="relative overflow-hidden aspect-video border-b border-black/5 dark:border-white/10">
                <Image
                  src={project.image}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  alt={project.title}
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Details Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1 mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-5">
                  {project.description}
                </p>

                {/* View Details HeroUI Button */}
                <div>
                  <Link href={`/project-details/${project._id}`}>
                    <Button
                      variant="tertiary"
                      className="group/btn w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2 rounded-2xl bg-slate-100/80 dark:bg-white/5 hover:bg-blue-500/10 dark:hover:bg-blue-400/10 border border-black/5 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-400/30 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer"
                    >
                      <span>View Details</span>
                      <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Action Buttons (Live Demo & GitHub) */}
            <div className="p-6 pt-0 flex items-center gap-3">
              <Link
                href={project.liveLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-blue-600/10 dark:bg-blue-400/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white text-xs font-semibold shadow-sm transition-all duration-300"
              >
                <FaExternalLinkAlt size={12} />
                <span>Live Demo</span>
              </Link>

              <Link
                href={project.githubLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-semibold shadow-sm transition-all duration-300"
              >
                <FaGithub size={14} />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
