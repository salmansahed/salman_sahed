import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { ImFileText } from "react-icons/im";
import { IoMdArrowRoundBack, IoMdCheckmarkCircleOutline } from "react-icons/io";
import {
  LuBookOpenCheck,
  LuCpu,
  LuExternalLink,
  LuMessageSquareShare,
  LuRocket,
} from "react-icons/lu";
import { PiTargetBold } from "react-icons/pi";
import { HiSparkles } from "react-icons/hi2";
import { MdOutlineTrackChanges } from "react-icons/md";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/projects/${id}`,
      {
        cache: "no-store",
      },
    );
    const project = await res.json();

    if (!project) {
      return {
        title: "Project Not Found | Salman Sahed",
      };
    }

    const shortDescription = project.description
      ? project.description.slice(0, 160) + "..."
      : `Explore ${project.title}, a modern web application developed by Salman Sahed.`;

    return {
      title: `${project.title} | Salman Sahed`,
      description: shortDescription,
      keywords: [
        project.title,
        `${project.title} project`,
        `${project.title} source code`,
        "Salman Sahed",
        "MERN Stack Developer",
        "Next.js Developer",
        "React Developer",
        "JavaScript Developer",
        "Full Stack Web Developer",
        "Portfolio Project",
        "Salman Sahed Projects",
        ...(project.techStack || []),
      ],
      authors: [{ name: "Salman Sahed" }],
      creator: "Salman Sahed",
      openGraph: {
        title: `${project.title} | Salman Sahed`,
        description: shortDescription,
        url: `https://salman-sahed.vercel.app/projects/${id}`,
        siteName: "Salman Sahed Portfolio",
        type: "website",
        locale: "en_US",
        images: [
          {
            url: project.image,
            width: 1200,
            height: 630,
            alt: project.title,
          },
        ],
      },
      alternates: {
        canonical: `https://salman-sahed.vercel.app/projects/${id}`,
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    return {
      title: "Project Details | Salman Sahed",
      description:
        "Explore professional web development projects built by Salman Sahed.",
    };
  }
}

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;
  let projectsData = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/projects/${id}`,
      { cache: "no-store" },
    );
    projectsData = await res.json();
  } catch (error) {
    console.error("Failed to fetch project details:", error);
  }

  if (!projectsData) {
    return (
      <div className="pt-36 pb-20 text-center text-slate-800 dark:text-white">
        <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
        <Link href="/#projects">
          <Button variant="ghost" className="text-blue-500 underline">
            Back to Projects
          </Button>
        </Link>
      </div>
    );
  }

  const {
    title,
    description,
    image,
    techStack = [],
    githubLink = "#",
    liveLink = "#",
    keyFeatures = [],
    challenges = [],
    keyLearning = [],
    futurePlans = [],
  } = projectsData;

  return (
    <div className="relative pt-28 pb-20 sm:pb-28 px-4 max-w-6xl mx-auto overflow-hidden">
      {/* 1. Ambient Background Glow Effects */}
      <div className="absolute top-20 left-1/4 w-100 h-75 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 right-10 w-87.5 h-87.5 bg-linear-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 2. Back Button (Pill Glass Style) */}
      <div className="mb-8">
        <Link href="/#projects">
          <Button
            variant="ghost"
            className="group flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white/30 dark:bg-white/4 border border-black/5 dark:border-white/10 backdrop-blur-xl hover:bg-linear-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-md shadow-black/5"
          >
            <IoMdArrowRoundBack className="text-lg group-hover:-translate-x-1 transition-transform" />
            <span>Back To Projects</span>
          </Button>
        </Link>
      </div>

      {/* 3. Main Title & Badge */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3 backdrop-blur-md">
          <HiSparkles className="text-amber-500 animate-pulse" />
          <span>Case Study</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            {title}
          </span>
        </h1>
      </div>

      {/* 4. Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column */}
        <div className="space-y-8">
          {/* Project Image Card */}
          <div className="relative group overflow-hidden rounded-3xl bg-white/40 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 p-3 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-purple-500/5">
            <div className="relative overflow-hidden rounded-2xl aspect-video w-full">
              <Image
                src={image}
                fill
                alt={title}
                priority
                className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Description */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/40 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-purple-500/5 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl flex items-center gap-3 font-bold text-slate-900 dark:text-white mb-4">
              <span className="p-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <ImFileText size={20} />
              </span>
              Description
            </h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              {description}
            </p>
          </div>

          {/* Challenges */}
          {challenges.length > 0 && (
            <div className="rounded-3xl p-6 sm:p-8 bg-white/40 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-purple-500/5 hover:border-blue-500/30 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl flex items-center gap-3 font-bold text-slate-900 dark:text-white mb-5">
                <span className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  <MdOutlineTrackChanges size={22} />
                </span>
                Key Challenges
              </h2>
              <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base"
                  >
                    <IoMdCheckmarkCircleOutline className="mt-1 text-pink-500 shrink-0 text-xl" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Plans */}
          {futurePlans.length > 0 && (
            <div className="rounded-3xl p-6 sm:p-8 bg-white/40 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-purple-500/5 hover:border-blue-500/30 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl flex items-center gap-3 font-bold text-slate-900 dark:text-white mb-5">
                <span className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  <LuRocket size={22} />
                </span>
                Future Roadmap
              </h2>
              <ul className="space-y-3">
                {futurePlans.map((plan, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base"
                  >
                    <IoMdCheckmarkCircleOutline className="mt-1 text-blue-500 shrink-0 text-xl" />
                    <span>{plan}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Tools & Tech Stack */}
          <div className="rounded-3xl p-6 sm:p-8 bg-white/40 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-purple-500/5 hover:border-blue-500/30 transition-all duration-300">
            <h2 className="text-xl sm:text-2xl flex items-center gap-3 font-bold text-slate-900 dark:text-white mb-6">
              <span className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                <LuCpu size={22} />
              </span>
              Tools & Tech Stack
            </h2>

            {/* Badges Grid */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-blue-500/10 dark:bg-white/5 border border-blue-500/20 dark:border-white/10 text-blue-600 dark:text-blue-300 backdrop-blur-md shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Live Preview & Github Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link target="_blank" href={liveLink} className="flex-1">
                <Button className="w-full rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 py-3 flex items-center justify-center gap-2">
                  <span>Live Demo</span>
                  <LuExternalLink className="text-lg" />
                </Button>
              </Link>
              <Link target="_blank" href={githubLink} className="flex-1">
                <Button className="w-full rounded-2xl bg-slate-100/80 dark:bg-white/10 border border-black/10 dark:border-white/15 text-slate-800 dark:text-white hover:bg-black/10 dark:hover:bg-white/20 font-semibold transition-all duration-300 py-3 flex items-center justify-center gap-2">
                  <span>Source Code</span>
                  <FiGithub className="text-lg" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Key Features */}
          {keyFeatures.length > 0 && (
            <div className="rounded-3xl p-6 sm:p-8 bg-white/40 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-purple-500/5 hover:border-blue-500/30 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl flex items-center gap-3 font-bold text-slate-900 dark:text-white mb-5">
                <span className="p-2 rounded-xl bg-pink-500/10 text-pink-500 border border-pink-500/20">
                  <PiTargetBold size={22} />
                </span>
                Key Features
              </h2>
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base"
                  >
                    <IoMdCheckmarkCircleOutline className="mt-1 text-purple-500 shrink-0 text-xl" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Learning */}
          {keyLearning.length > 0 && (
            <div className="rounded-3xl p-6 sm:p-8 bg-white/40 dark:bg-slate-950/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-purple-500/5 hover:border-blue-500/30 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl flex items-center gap-3 font-bold text-slate-900 dark:text-white mb-5">
                <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <LuBookOpenCheck size={22} />
                </span>
                Key Learnings
              </h2>
              <ul className="space-y-3">
                {keyLearning.map((learn, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base"
                  >
                    <IoMdCheckmarkCircleOutline className="mt-1 text-emerald-500 shrink-0 text-xl" />
                    <span>{learn}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Contact CTA Card */}
          <div className="rounded-3xl p-6 sm:p-8 bg-linear-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-blue-500/20 dark:border-white/15 backdrop-blur-2xl shadow-xl transition-all duration-300 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Want a similar project?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mb-6">
              Let&apos;s collaborate and build something extraordinary together.
            </p>
            <Link href="/#contacts">
              <Button className="w-full rounded-2xl bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/25 hover:opacity-95 transition-all duration-300 py-3.5 flex items-center justify-center gap-2">
                <span>Contact Me</span>
                <LuMessageSquareShare className="text-lg" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
