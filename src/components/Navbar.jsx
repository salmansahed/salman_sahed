"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import ThemeSwitch from "./theming/ThemeSwitch";

const navLinks = [
  { name: "Home", href: "home" },
  { name: "About", href: "about" },
  { name: "Skills", href: "skills" },
  { name: "Services", href: "services" },
  { name: "Projects", href: "projects" },
  { name: "Contacts", href: "contacts" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar Glass visual shift on scroll
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active Section Scroll Detection
      const sections = navLinks.map((link) =>
        document.getElementById(link.href),
      );

      const scrollPosition = window.scrollY + 250;

      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setActiveSection(href);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 transition-all duration-300">
      {/* Main Ultra-Transparent Glass Navbar Bar */}
      <div
        className={`mx-auto my-3 flex max-w-6xl items-center justify-between rounded-full border transition-all duration-300 px-5 sm:px-6 py-3 backdrop-blur-2xl ${
          isScrolled
            ? "bg-white/40 dark:bg-slate-950/40 border-black/10 dark:border-white/15 shadow-xl shadow-black/5 dark:shadow-purple-500/5"
            : "bg-white/20 dark:bg-white/2 border-black/5 dark:border-white/10 shadow-lg shadow-black/5"
        }`}
      >
        {/* Cyber Brand Logo */}
        <Link
          href="/#home"
          onClick={() => handleLinkClick("home")}
          className="group flex items-center gap-1 text-lg sm:text-xl font-black tracking-wider uppercase text-slate-900 dark:text-white"
        >
          <span className="text-blue-600 dark:text-blue-400 group-hover:-translate-x-0.5 transition-transform">
            {"<"}
          </span>
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 font-black">
            SALMAN
          </span>
          <span className="text-pink-600 dark:text-pink-400 group-hover:translate-x-0.5 transition-transform">
            {"/>"}
          </span>
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1 rounded-full bg-slate-100/40 dark:bg-white/3 p-1.5 border border-black/5 dark:border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.href}
                  href={`/#${link.href}`}
                  onClick={() => handleLinkClick(link.href)}
                  className={`relative text-xs sm:text-sm rounded-full px-4 py-1.5 font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/25"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Vertical Divider & Theme Switcher */}
          <div className="ml-2 pl-2 border-l border-black/10 dark:border-white/10 flex items-center">
            <ThemeSwitch />
          </div>
        </div>

        {/* Mobile Header Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeSwitch />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="flex items-center justify-center p-2 rounded-full bg-slate-100/40 dark:bg-white/5 border border-black/10 dark:border-white/15 text-slate-800 dark:text-slate-200 hover:bg-black/10 dark:hover:bg-white/20 transition-all"
          >
            {isMenuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Ultra-Transparent Glass Panel) */}
      <div
        className={`absolute left-4 right-4 top-20 rounded-3xl border border-white/40 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 p-5 backdrop-blur-2xl shadow-2xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-2 gap-2.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <Link
                key={link.href}
                href={`/#${link.href}`}
                onClick={() => handleLinkClick(link.href)}
                className={`flex items-center justify-center rounded-2xl py-3 px-4 text-xs font-bold transition-all ${
                  isActive
                    ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/20"
                    : "bg-slate-100/40 dark:bg-white/3 border border-black/5 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/10"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
