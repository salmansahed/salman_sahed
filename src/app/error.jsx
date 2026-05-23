"use client";

import { FaExclamationTriangle, FaHome, FaRedo } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Error({ reset }) {
  return (
    <div className="min-h-[80vh] sm:min-h-screen flex flex-col items-center justify-center bg-gray-950 text-white p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaExclamationTriangle className="text-6xl text-red-500 mx-auto mb-6" />

        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-red-400 to-pink-600">
          Oops! Something went wrong.
        </h2>

        <p className="text-gray-400 mb-8 max-w-md">
          Sorry, we&apos;re having trouble loading this page. You can try
          refreshing the page or head back to the home screen.
        </p>

        <div className="flex gap-4 justify-center">
          {/* Try Again Button */}
          <button
            onClick={() => reset()}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 transition-all rounded-lg font-semibold"
          >
            <FaRedo /> Try Again
          </button>

          {/* Home Button */}
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 transition-all rounded-lg font-semibold"
          >
            <FaHome /> Go Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
