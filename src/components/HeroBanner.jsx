"use client";

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaRegEye } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { TypeAnimation } from "react-type-animation";
import heroImg from "../assets/images/salman_sahed_hero_section.png";

const HeroBanner = () => {
  return (
    <div
      className="relative max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between pt-28 sm:pt-32 md:pt-40 pb-20 overflow-hidden"
      id="home"
    >
      {/* 1. Subtle Ambient Glows */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse delay-700" />

      {/* 2. Left Side: Text Info & Actions */}
      <div className="gap-4 flex flex-col items-center md:items-start mt-10 md:mt-0 z-10">
        {/* Welcome Cyber Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
          <HiSparkles className="text-amber-500" />
          <span>Hey, Welcome to my portfolio</span>
        </div>

        {/* Name Header */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white transition-colors">
          Salman Sahed
        </h1>

        {/* Typing Animation Title */}
        <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
          <TypeAnimation
            sequence={[
              "Full-Stack Web Developer",
              2000,
              "MERN Stack Specialist",
              2000,
              "Next.js App Router Expert",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
          />
        </div>

        {/* Tagline */}
        <h2 className="text-lg sm:text-xl font-medium text-slate-700 dark:text-slate-300 transition-colors md:text-left text-center">
          Crafting Scalable & High-Performance Web Experiences
        </h2>

        {/* Bio Paragraph */}
        <p className="w-full max-w-lg text-slate-600 dark:text-gray-300 text-center md:text-left text-sm sm:text-base leading-relaxed transition-colors">
          🚀 Transforming complex ideas into high-performance digital solutions
          | Specialized in modern MERN Stack, Next.js & Tailored UI 💻
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
          <Link href={"/#contacts"}>
            <Button className="group flex items-center gap-2 px-6 py-3 rounded-2xl bg-black/5 dark:bg-white/10 border border-black/15 dark:border-white/20 text-slate-900 dark:text-white font-medium shadow-md hover:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all duration-300">
              <span>Say Hello</span>
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                👋
              </span>
            </Button>
          </Link>

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

        {/* Social Links */}
        <div className="flex items-center space-x-3 pt-2">
          <Link
            target="_blank"
            className="bg-black/5 dark:bg-white/10 text-slate-800 dark:text-white border border-black/10 dark:border-white/20 flex justify-center items-center w-10 h-10 rounded-2xl text-xl hover:bg-slate-900 hover:text-white dark:hover:bg-white/20 hover:scale-110 transition-all duration-300 shadow-sm"
            href={"https://github.com/salmansahed"}
          >
            <FaGithub />
          </Link>
          <Link
            target="_blank"
            className="bg-black/5 dark:bg-white/10 text-slate-800 dark:text-white border border-black/10 dark:border-white/20 flex justify-center items-center w-10 h-10 rounded-2xl text-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500/30 dark:hover:border-blue-400 hover:scale-110 transition-all duration-300 shadow-sm"
            href={"https://www.linkedin.com/in/salman-sahed/"}
          >
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            className="bg-black/5 dark:bg-white/10 text-slate-800 dark:text-white border border-black/10 dark:border-white/20 flex justify-center items-center w-10 h-10 rounded-2xl text-xl hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500/30 dark:hover:border-blue-400 hover:scale-110 transition-all duration-300 shadow-sm"
            href={"https://www.facebook.com/salmansahedbd"}
          >
            <FaFacebook />
          </Link>
        </div>
      </div>

      {/* 3. Right Side: Ultra-Modern Cyber Glass Image Container */}
      <div className="relative z-10 flex items-center justify-center group my-6 md:my-0">
        {/* Outer Orbit Laser Ring 1 (Clockwise Spin) */}
        <div className="absolute -inset-5 rounded-full border border-dashed border-blue-500/30 dark:border-blue-400/30 animate-[spin_20s_linear_infinite] pointer-events-none" />

        {/* Inner Orbit Laser Ring 2 (Counter-Clockwise Spin) */}
        <div className="absolute -inset-2 rounded-full border border-purple-500/30 dark:border-purple-400/30 animate-[spin_15s_linear_infinite_reverse] pointer-events-none" />

        {/* Ambient Glow Aura Behind Image */}
        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-pink-500/30 blur-2xl group-hover:blur-3xl transition-all duration-500" />

        {/* Glassmorphic Image Frame */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-2.5 bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/20 shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.02]">
          <div className="relative w-full h-full rounded-full overflow-hidden border border-black/10 dark:border-white/10 bg-linear-to-b from-blue-500/10 to-purple-500/10 dark:from-white/5 dark:to-white/10">
            <Image
              src={heroImg}
              fill
              alt="Salman Sahed"
              priority
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Floating Glass Badge 1: Available for Hire (Bottom-Left) */}
        <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:-left-6 z-20 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-black/10 dark:border-white/20 shadow-xl backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-100 hover:scale-105 transition-transform cursor-default">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span>Available for Hire</span>
        </div>

        {/* Floating Glass Badge 2: Tech Stack (Top-Right) */}
        <div className="absolute -top-2 -right-2 sm:top-4 sm:-right-6 z-20 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-black/10 dark:border-white/20 shadow-xl backdrop-blur-md text-xs sm:text-sm font-mono font-bold text-slate-800 dark:text-slate-100 hover:scale-105 transition-transform cursor-default">
          <span className="text-blue-500 dark:text-blue-400">&lt;</span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
            Next.js / MERN
          </span>
          <span className="text-blue-500 dark:text-blue-400">/&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
