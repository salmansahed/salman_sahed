import { Button } from "@heroui/react";
import Image from "next/image";
import { FaBriefcase, FaRegEye } from "react-icons/fa";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import aboutImg from "../assets/images/salman_sahed_carton.png";
import Link from "next/link";

const About = () => {
  return (
    <div
      className="max-w-6xl mx-auto py-6 sm:py-10 md:py-24 px-3 scroll-mt-0"
      id="about"
    >
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100 transition-colors">
          About
        </h1>
        <p className="text-gray-600 dark:text-gray-300 transition-colors">
          My Introduction
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-0">
        {/* Profile/Avatar Image */}
        <div className="w-full flex justify-center">
          <Image
            src={aboutImg}
            width={500}
            height={500}
            alt="Salman Sahed"
            className="rounded-none md:rounded-full"
          />
        </div>

        {/* Content Right */}
        <div className="w-full space-y-6">
          {/* Info Cards Grid */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start">
            {/* Experience Card */}
            <div className="bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/20 backdrop-blur-3xl p-4 w-full sm:w-38 rounded-2xl flex flex-col gap-1 items-center justify-center text-gray-800 dark:text-white shadow-[0_0_10px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] group transition-all duration-200">
              <FaBriefcase className="text-2xl mt-1 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-all duration-200" />
              <h2 className="text-xl font-semibold">Experience</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                1+ Years Working
              </p>
            </div>

            {/* Completed Card */}
            <div className="bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/20 backdrop-blur-3xl p-4 w-full sm:w-38 rounded-2xl flex flex-col gap-1 items-center justify-center text-gray-800 dark:text-white shadow-[0_0_10px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] group transition-all duration-200">
              <IoCheckmarkDoneCircle className="text-2xl mt-1 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-all duration-200" />
              <h2 className="text-xl font-semibold">Completed</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                10+ Projects
              </p>
            </div>

            {/* Support Card */}
            <div className="bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/20 backdrop-blur-3xl p-4 w-full sm:w-38 rounded-2xl flex flex-col gap-1 items-center justify-center text-gray-800 dark:text-white shadow-[0_0_10px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] group transition-all duration-200">
              <MdOutlineSupportAgent className="text-2xl mt-1 group-hover:text-yellow-500 dark:group-hover:text-yellow-300 transition-all duration-200" />
              <h2 className="text-xl font-semibold">Support</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Online 24/7
              </p>
            </div>
          </div>

          {/* Description & Action Button */}
          <div className="space-y-6 text-center md:text-left">
            <div className="bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 p-4 rounded-xl text-gray-700 dark:text-gray-200 transition-colors">
              <p className="leading-relaxed">
                I’m a MERN Stack & Next.js Developer dedicated to building
                scalable, high-performance web applications with exceptional
                UI/UX. I successfully transitioned from WordPress to deep
                JavaScript frameworks, driven by a commitment to clean code. My
                passion for engineering extends beyond software into DIY
                electronics and custom solar setups. I thrive on the challenge
                of building from scratch whether it&apos;s an intricate codebase
                or hardware logic and love giving back to the developer
                community.
              </p>
            </div>

            <Link
              href="https://drive.google.com/file/d/1_0ud2mU9at8fZbRPFTy6yGOQbSiBj7t2/view"
              target="_blank"
              className="inline-block"
            >
              <Button className="bg-black/5 border border-black/10 text-gray-900 dark:bg-white/10 dark:border-white/20 dark:text-white py-6 px-6 text-base rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] group transition-all duration-200">
                View Resume{" "}
                <FaRegEye className="group-hover:scale-110 transition-all delay-100 group-hover:text-yellow-500 dark:group-hover:text-yellow-400" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
