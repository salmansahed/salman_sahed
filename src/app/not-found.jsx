import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { RiErrorWarningFill } from "react-icons/ri";

const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* 1. Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700" />

      {/* 2. Glassmorphic Main Card Container */}
      <div className="relative z-10 max-w-lg w-full flex flex-col items-center text-center p-8 sm:p-12 rounded-3xl bg-white/70 dark:bg-white/3 border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-2xl transition-all">
        {/* 3. Cyber Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-2">
          <RiErrorWarningFill className="text-amber-500 text-2xl dark:text-amber-400" />
          <span>ERROR_CODE: 404</span>
        </div>

        {/* 4. Giant Glowing 404 Text */}
        <h1 className="text-[100px] sm:text-[140px] md:text-[160px] font-extrabold font-mono leading-none tracking-tight text-transparent bg-clip-text bg-linear-to-b from-blue-600 via-purple-600 to-orange-500 dark:from-white dark:via-white/80 dark:to-white/20 drop-shadow-sm dark:drop-shadow-[0_0_35px_rgba(255,255,255,0.2)] select-none">
          404
        </h1>

        {/* 5. Title & Description */}
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-gray-100 -mt-2 sm:-mt-4">
          Oops! Lost in Space?
        </h2>

        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-gray-400 max-w-md leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* 6. Interactive Back to Home Button */}
        <div className="mt-8">
          <Link href={"/"}>
            <Button className="group flex items-center gap-2 px-6 py-3 rounded-2xl bg-black/5 dark:bg-white/10 border border-black/15 dark:border-white/20 text-slate-900 dark:text-gray-100 font-medium shadow-md hover:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105">
              <HiOutlineHome className="text-lg group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Back to Home</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
