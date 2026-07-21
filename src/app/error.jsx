"use client";

import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";

export default function Error({ reset }) {
  return (
    <div className="relative min-h-[80vh] sm:min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden text-center">
      {/* 1. Ambient Red Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/15 dark:bg-red-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-500/15 dark:bg-rose-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse delay-700" />

      {/* 2. Ultra-Transparent Glassmorphic Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 max-w-lg w-full flex flex-col items-center p-8 sm:p-12 rounded-3xl bg-white/70 dark:bg-white/3 border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-2xl transition-all"
      >
        {/* 3. Glowing Error Icon Glass Badge */}
        <div className="relative flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-red-500/10 dark:bg-red-500/15 border border-red-500/20 dark:border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
          <FaExclamationTriangle className="text-4xl text-red-600 dark:text-red-400 animate-pulse" />
        </div>

        {/* 4. Title & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-linear-to-r from-red-600 via-rose-500 to-pink-600 dark:from-red-400 dark:via-rose-400 dark:to-pink-500">
          Oops! Something went wrong
        </h2>

        <p className="text-slate-600 dark:text-gray-400 mb-8 max-w-md text-sm sm:text-base leading-relaxed">
          Sorry, we&apos;re having trouble loading this page. You can try
          refreshing the page or head back to the home screen.
        </p>

        {/* 5. Action Buttons Group */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          {/* Try Again Button */}
          <Button
            onClick={() => reset()}
            className="group flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-medium shadow-lg shadow-red-600/25 dark:shadow-red-600/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <FaRedo className="text-sm group-hover:rotate-180 transition-transform duration-500" />
            <span>Try Again</span>
          </Button>

          {/* Home Button */}
          <Link href="/">
            <Button className="group flex items-center justify-center gap-2 px-6 py-3 w-full sm:w-auto rounded-2xl bg-black/5 dark:bg-white/10 border border-black/15 dark:border-white/20 text-slate-900 dark:text-gray-100 font-medium shadow-md hover:shadow-xl dark:shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all duration-300">
              <FaHome className="text-base group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Go Home</span>
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
