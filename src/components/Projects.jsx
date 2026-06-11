import Link from "next/link";
import React from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

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
        <h2 className="text-4xl font-bold text-gray-100 mb-4">My Projects</h2>
        <p className="text-gray-300">Some of my recent works</p>
      </div>

      {/* Grid Layout (3 items per row on large screens) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-300 group"
          >
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
              <h3 className="text-xl font-bold text-gray-100 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Details Button */}
              <div className="mb-3">
                <Link
                  href={`/project-details/${project._id}`}
                  className="inline-block"
                >
                  <button className="cursor-pointer group/btn flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white text-sm py-1.5 px-5 rounded-full transition-all duration-300 ease-in-out shadow-lg shadow-black/10">
                    <span>View More Details</span>

                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </button>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Link
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 text-gray-100 border border-white/20 text-sm font-semibold rounded-lg hover:bg-white/20 transition-all"
                >
                  <FaExternalLinkAlt size={14} /> Live Demo
                </Link>
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 text-gray-100 text-sm font-semibold rounded-lg border border-white/10 hover:bg-white/20 transition-all"
                >
                  <FaGithub size={16} /> GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
