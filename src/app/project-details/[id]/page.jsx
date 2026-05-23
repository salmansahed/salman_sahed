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

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/projects/${id}`,
  );
  const projectsData = await res.json();
  const { title, description, image, techStack, githubLink, liveLink } =
    projectsData;
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
        <h1 className="bg-white/8 border border-white/10 inline-block px-6 py-1 rounded-br-4xl rounded-tl-4xl shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold inline-block py-2 rounded bg-linear-to-l from-blue-400 to-orange-400 text-transparent bg-clip-text">
            {title}
          </span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex-1 space-y-8">
          <div className="flex justify-center">
            <Image
              src={image}
              height={600}
              width={600}
              alt={title}
              className="object-cover rounded-3xl border-4 border-white/50 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-300"
            />
          </div>
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h1 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <ImFileText className="text-amber-400" />
              Description
            </h1>
            <p className="text-gray-300">{description}</p>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h1 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <FiTarget className="text-purple-400" />
              Challenges
            </h1>
            <ul className="text-gray-200 space-y-2">
              <li className="flex items-start gap-2 text-base sm:text-lg">
                <IoMdCheckmarkCircleOutline className="mt-1 text-orange-400 text-xl" />{" "}
                Coming Soon Challenges List...
              </li>
            </ul>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h1 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <LuRocket className="text-purple-400" />
              Future Plans
            </h1>
            <ul className="text-gray-200 space-y-2">
              <li className="flex items-start gap-2 text-base sm:text-lg">
                <IoMdCheckmarkCircleOutline className="mt-1 text-orange-400 text-xl" />{" "}
                Coming Soon Future Plans List...
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 space-y-8">
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h1 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <LuCpu className="text-purple-400" />
              Tools & Technologies
            </h1>
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
              <Link href={liveLink}>
                <Button className="w-full rounded-lg bg-white/10 border border-white/20 text-gray-100 group shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
                  Live Preview{" "}
                  <LuExternalLink className="group-hover:scale-125 transition-all duration-200" />
                </Button>
              </Link>
              <Link href={githubLink}>
                <Button className="w-full rounded-lg bg-white/10 border border-white/20 text-gray-100 group shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
                  Source Code{" "}
                  <FiGithub className="group-hover:scale-125 transition-all duration-200" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h1 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <PiTargetBold className="text-purple-400" />
              Key Features
            </h1>

            <ul className="text-gray-200 space-y-2">
              <li className="flex items-start gap-2 text-base sm:text-lg">
                <IoMdCheckmarkCircleOutline className="mt-1 text-orange-400 text-xl" />{" "}
                Coming Soon Key Features List...
              </li>
            </ul>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h1 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              <LuBookOpenCheck className="text-purple-400" />
              Key Learning
            </h1>

            <ul className="text-gray-200 space-y-2">
              <li className="flex items-start gap-2 text-base sm:text-lg">
                <IoMdCheckmarkCircleOutline className="mt-1 text-orange-400 text-xl" />{" "}
                Coming Soon Key Learning List...
              </li>
            </ul>
          </div>
          <div className="bg-white/10 border border-white/20 rounded-3xl px-4 sm:px-6 py-6 sm:py-8 space-y-4 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-shadow">
            <h1 className="text-xl sm:text-2xl flex items-center gap-2 font-semibold text-gray-100">
              Want a similar project?
            </h1>
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
