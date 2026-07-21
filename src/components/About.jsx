import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaBriefcase, FaRegEye } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import aboutImg from "../assets/images/salman_sahed_about.jpg";

const About = () => {
  return (
    <section
      className="relative max-w-6xl mx-auto py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20 overflow-hidden"
      id="about"
    >
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse delay-700" />

      {/* 2. Modern Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-3">
          <HiSparkles className="text-amber-500" />
          <span>GET TO KNOW ME</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          About{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Me
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 mt-2 max-w-md">
          My Introduction & Technical Journey
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* 3. Left Side: Ultra-Glass Avatar Frame */}
        {/* 3. Left Side: Ultra-Glass Avatar Frame */}
        <div className="lg:col-span-5 flex justify-center relative group">
          {/* Ambient Glow Aura behind Image Card */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-blue-500/20 via-purple-500/20 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-transparent blur-xl group-hover:blur-2xl transition-all duration-500" />

          {/* Glass Card Container (Full Cover Version) */}
          <div className="relative w-full max-w-sm h-100 sm:h-112.5 rounded-3xl overflow-hidden p-3 bg-white/60 dark:bg-white/3 border border-white/60 dark:border-white/10 shadow-2xl backdrop-blur-2xl transition-all duration-500 group-hover:scale-[1.02]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-black/5 dark:border-white/5">
              <Image
                src={aboutImg}
                alt="Salman Sahed"
                fill
                priority
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* 4. Right Side: Info Cards, Description & Action Button */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Top 3 Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Experience Card */}
            <div className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-white/60 dark:bg-white/3 border border-black/10 dark:border-white/10 shadow-md hover:shadow-xl backdrop-blur-2xl hover:border-blue-500/40 dark:hover:border-blue-400/40 hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="p-3 rounded-xl bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 mb-2 group-hover:scale-110 transition-transform">
                <FaBriefcase className="text-xl" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Experience
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-1 font-medium">
                1+ Years Working
              </p>
            </div>

            {/* Completed Card */}
            <div className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-white/60 dark:bg-white/3 border border-black/10 dark:border-white/10 shadow-md hover:shadow-xl backdrop-blur-2xl hover:border-purple-500/40 dark:hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="p-3 rounded-xl bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 mb-2 group-hover:scale-110 transition-transform">
                <IoCheckmarkDoneCircle className="text-2xl" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Completed
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-1 font-medium">
                10+ Projects
              </p>
            </div>

            {/* Support Card */}
            <div className="group flex flex-col items-center justify-center p-5 rounded-2xl bg-white/60 dark:bg-white/3 border border-black/10 dark:border-white/10 shadow-md hover:shadow-xl backdrop-blur-2xl hover:border-emerald-500/40 dark:hover:border-emerald-400/40 hover:-translate-y-1 transition-all duration-300 text-center">
              <div className="p-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
                <MdOutlineSupportAgent className="text-2xl" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Support
              </h3>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-1 font-medium">
                Online 24/7
              </p>
            </div>
          </div>

          {/* Glass Description Card */}
          <div className="p-6 rounded-2xl bg-white/60 dark:bg-white/3 border border-black/10 dark:border-white/10 shadow-md backdrop-blur-2xl text-slate-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base transition-colors">
            <p>
              I’m a{" "}
              <strong className="text-slate-900 dark:text-white font-semibold">
                MERN Stack & Next.js Developer
              </strong>{" "}
              dedicated to building scalable, high-performance web applications
              with exceptional UI/UX. I successfully transitioned from WordPress
              to deep JavaScript frameworks, driven by a commitment to clean
              code.
            </p>
            <p className="mt-3">
              My passion for engineering extends beyond software into DIY
              electronics and custom solar setups. I thrive on the challenge of
              building from scratch—whether it&apos;s an intricate codebase or
              hardware logic—and love giving back to the developer community.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex justify-center md:justify-start">
            <Link
              href="https://drive.google.com/file/d/1_0ud2mU9at8fZbRPFTy6yGOQbSiBj7t2/view"
              target="_blank"
            >
              <Button className="group flex items-center gap-2 px-6 py-3 rounded-2xl bg-black/5 dark:bg-white/10 border border-black/15 dark:border-white/20 text-slate-900 dark:text-white font-medium shadow-md hover:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all duration-300">
                <span>View Resume</span>
                <FaRegEye className="group-hover:scale-110 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-all duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
