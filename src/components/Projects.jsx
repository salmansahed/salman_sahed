import Link from "next/link";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const Projects = () => {
  const projects = [
    // BookVerse
    {
      id: 1,
      title: "BookVerse",
      description:
        "Modern library management system featuring dynamic search and category filtering.",
      image: "https://i.ibb.co/Sw8jPKWC/book-verse.png",
      techStack: [
        "MERN Stack",
        "Next.js",
        "Better-Auth",
        "MongoDB Atlas",
        "Tailwind",
        "HeroUI",
      ],
      liveLink: "https://book-verse-library.vercel.app/",
      githubLink: "https://github.com/salmansahed/book-verse-library",
    },
    // KeenKeeper
    {
      id: 2,
      title: "KeenKeeper",
      description:
        "A high-performance, modern dashboard built with Next.js to manage friend lists and track interaction history.",
      image: "https://i.ibb.co/Qz9Kdr2/keenkeeper.png",
      techStack: [
        "Next.js",
        "Tailwind",
        "Recharts",
        "DaisyUI",
        "React Toastify & Icons",
      ],
      liveLink: "https://keen-keeper-olive.vercel.app/",
      githubLink: "https://github.com/salmansahed/keen-keeper",
    },
    // Emergency Service Directory
    // DigiTools
    {
      id: 3,
      title: "DigiTools",
      description:
        "A modern digital tools landing page featuring product showcases and pricing layouts.",
      image: "https://i.ibb.co/p6fjXmmF/digi-tools.png",
      techStack: [
        "React",
        "Tailwind CSS",
        "DaisyUI",
        "JavaScript",
        "React Toastify",
      ],
      liveLink: "https://digi-tools-eta.vercel.app/",
      githubLink: "https://github.com/salmansahed/DigiTools",
    },
    {
      id: 4,
      title: "Emergency Service Directory",
      description:
        "A modern, responsive web application designed to provide quick access to essential emergency service numbers in Bangladesh. Users can easily find, copy, and dial emergency contacts directly from the dashboard.",
      image: "https://i.ibb.co/0pybCKrv/emergency-service.png",
      techStack: ["React", "Tailwind CSS", "React Toastify"],
      liveLink: "https://gov-emergency-services.netlify.app/",
      githubLink: "https://github.com/salmansahed/Emergency-Services",
    },
    // GitHub Issues Tracker
    {
      id: 5,
      title: "GitHub Issues Tracker",
      description:
        "A dynamic issue tracking interface built entirely with JavaScript and Tailwind CSS, focusing on clean UI and efficient issue management.",
      image: "https://i.ibb.co/ksP7BjP7/github-issue-tracker.png",
      techStack: ["JavaScript", "Tailwind CSS"],
      liveLink: "https://salmansahed.github.io/GitHub-Issues-Tracker/",
      githubLink: "https://github.com/salmansahed/GitHub-Issues-Tracker",
    },
    // Payoo Mobile Bank
    {
      id: 6,
      title: "Payooo Mobile Bank",
      description:
        "A modern and responsive mobile banking interface designed for seamless financial transactions, built with JavaScript and Tailwind CSS.",
      image: "https://i.ibb.co/ZRf0FMH3/payoo-mobile-bank.png",
      techStack: ["JavaScript", "Tailwind"],
      liveLink: "https://salmansahed.github.io/Payooo-Mobile-Bank/",
      githubLink: "https://github.com/salmansahed/Payooo-Mobile-Bank",
    },
  ];

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
        {projects.map((project) => (
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

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-xs text-gray-300 rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
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
