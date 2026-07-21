import Link from "next/link";
import React from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { Button } from "@heroui/react";

const Projects = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/projects`);
  const projectsData = await res.json();
  console.log("project data all check =>", projectsData);

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-3 max-w-6xl mx-auto scroll-mt-8"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors">
          My Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 transition-colors">
          Some of my recent works
        </p>
      </div>

      {/* Grid Layout (3 items per row on large screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id || project._id}
            className="bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/20 rounded-2xl overflow-hidden shadow-[0_0_10px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image}
                  height={600}
                  width={600}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 transition-colors">
                  {project.description}
                </p>

                {/* Details Button */}
                <div className="mb-3">
                  <Link
                    href={`/project-details/${project._id}`}
                    className="inline-block"
                  >
                    <Button className="cursor-pointer group/btn flex items-center gap-2 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 border border-black/10 hover:border-black/20 dark:border-white/20 dark:hover:border-white/40 text-gray-800 dark:text-white text-sm py-1.5 px-5 rounded-full transition-all duration-300 ease-in-out shadow-sm dark:shadow-lg dark:shadow-black/10">
                      <span>View More Details</span>
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 pb-6 pt-0 flex items-center gap-4">
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-100 border border-black/10 dark:border-white/20 text-sm font-semibold rounded-lg hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300"
              >
                <FaExternalLinkAlt size={14} /> Live Demo
              </Link>
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-100 text-sm font-semibold rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-all duration-300"
              >
                <FaGithub size={16} /> GitHub
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
