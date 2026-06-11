import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiTarget } from "react-icons/fi";
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
      title: "Project Details",
      description:
        "Explore professional web development projects built by Salman Sahed.",
    };
  }
}

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/projects/${id}`,
  );
  const projectsData = await res.json();
  const {
    title,
    description,
    image,
    techStack,
    githubLink,
    liveLink,
    keyFeatures,
    challenges,
    keyLearning,
    futurePlans,
  } = projectsData;
  return (
    <div className="pt-28 pb-20 sm:pb-28 px-3 max-w-6xl mx-auto">
      <Link href={"/#projects"}>
        <Button
          variant="ghost"
          className="text-white mb-6 hover:bg-transparent hover:text-blue-500 transition-all duration-300 px-0 py-0"
        >
          <IoMdArrowRoundBack /> Back To Projects
        </Button>
      </Link>
      <div className="mb-6 text-center">
        <h2 className="bg-white/8 border border-white/10 inline-block px-6 py-1 rounded-br-4xl rounded-tl-4xl shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold inline-block py-2 rounded bg-linear-to-l from-blue-400 to-orange-400 text-transparent bg-clip-text">
            {title}
          </span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex-1 space-y-8">
          {/* Project Image */}
          <div className="flex justify-center rounded-3xl">
            <Image
              src={image}
              height={400}
              width={600}
              alt={title}
              className="object-cover rounded-3xl border-4 border-white/50 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-300"
            />
          </div>
          {/* Project Description */}
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h2 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <ImFileText className="text-amber-400" />
              Description
            </h2>
            <p className="text-gray-300">{description}</p>
          </div>
          {/* Challenges */}
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h2 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <FiTarget className="text-purple-400" />
              Challenges
            </h2>
            <ul className="text-gray-200 space-y-2">
              {challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-base sm:text-lg"
                >
                  <IoMdCheckmarkCircleOutline className="mt-1 text-orange-400 text-3xl" />{" "}
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          {/* Future Plans */}
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h2 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <LuRocket className="text-purple-400" />
              Future Plans
            </h2>
            <ul className="text-gray-200 space-y-2">
              {futurePlans.map((plan, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-base sm:text-lg"
                >
                  <IoMdCheckmarkCircleOutline className="mt-1 text-orange-400 text-3xl" />{" "}
                  {plan}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 space-y-8">
          {/* Tools & Technologies */}
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h2 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <LuCpu className="text-purple-400" />
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-4 sm:gap-5 my-8 sm:my-10">
              {techStack.map((tech, index) => (
                <p
                  key={index}
                  className="bg-white/10 px-3 py-1 rounded-lg border border-white/50 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow text-sm sm:text-base"
                >
                  {tech}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              <Link target="_blank" href={liveLink}>
                <Button className="w-full rounded-lg bg-white/10 border border-white/20 text-gray-100 group shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
                  Live Preview{" "}
                  <LuExternalLink className="group-hover:scale-125 transition-all duration-200" />
                </Button>
              </Link>
              <Link target="_blank" href={githubLink}>
                <Button className="w-full rounded-lg bg-white/10 border border-white/20 text-gray-100 group shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
                  Source Code{" "}
                  <FiGithub className="group-hover:scale-125 transition-all duration-200" />
                </Button>
              </Link>
            </div>
          </div>
          {/* Key Features */}
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h2 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <PiTargetBold className="text-purple-400" />
              Key Features
            </h2>

            <ul className="text-gray-200 space-y-2">
              {keyFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-base sm:text-lg"
                >
                  <IoMdCheckmarkCircleOutline className="mt-1 text-orange-400 text-3xl" />{" "}
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          {/* Key Learning */}
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h2 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <LuBookOpenCheck className="text-purple-400" />
              Key Learning
            </h2>

            <ul className="text-gray-200 space-y-2">
              {keyLearning.map((learn, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-base sm:text-lg"
                >
                  <IoMdCheckmarkCircleOutline className="mt-1 text-orange-400 text-3xl" />{" "}
                  {learn}
                </li>
              ))}
            </ul>
          </div>
            {/* Contact Me */}
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h2 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              Want a similar project?
            </h2>
            <p className="text-gray-300">
              Let&apos;s collaborate and build something extraordinary together.
            </p>
            <Link href={"/#contacts"}>
              <Button className="w-full rounded-lg bg-white/10 border border-white/20 text-gray-100 group shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
                Contact Me
                <LuMessageSquareShare className="group-hover:scale-125 transition-all duration-200" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
