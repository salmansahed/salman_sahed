"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { BiChevronDownCircle } from "react-icons/bi";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu control state

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.href),
      );

      const scrollPosition = window.scrollY + 200;

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
    <nav className="fixed left-0 right-0 top-0 z-50 px-4">
      {/* Main Navbar Bar */}
      <div className="mx-auto my-4 flex max-w-6xl items-center justify-between rounded-full border border-black/10 bg-black/5 dark:border-white/20 dark:bg-white/10 py-4 px-6 text-gray-800 dark:text-white/80 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-2xl dark:shadow-white/10 transition-colors">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-semibold uppercase text-gray-900 dark:text-white transition-colors">
            <Link href={"/"}>
              <span className="text-green-500 dark:text-green-400">{"<"}</span>{" "}
              SALMAN{" "}
              <span className="text-red-500 dark:text-red-400">{"/>"}</span>
            </Link>
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/#${link.href}`}
              onClick={() => setActiveSection(link.href)}
              className={`text-sm rounded-full px-3 py-1 font-medium transition-all duration-300 border ${
                activeSection === link.href
                  ? "bg-black/10 border-black/30 text-gray-900 shadow-sm dark:bg-white/20 dark:border-white/50 dark:text-white dark:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                  : "border-black/10 hover:border-black/30 text-gray-700 dark:border-white/20 dark:hover:border-white/60 dark:text-white/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={"/#home"}
            onClick={() => handleLinkClick("home")}
            className={`rounded-full border px-3 py-1 text-sm transition-all duration-300 ${
              activeSection === "home"
                ? "bg-black/10 border-black/30 text-gray-900 dark:bg-white/20 dark:border-white/50 dark:text-white dark:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                : "border-black/10 text-gray-700 dark:border-white/30 dark:text-white/70"
            }`}
          >
            Home
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`flex items-center gap-1 rounded-full border px-3 py-1 text-sm transition-all duration-300 ${
              isMenuOpen
                ? "bg-black/10 border-black/30 text-gray-900 dark:bg-white/20 dark:border-white/50 dark:text-white dark:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                : "border-black/10 text-gray-700 dark:border-white/30 dark:text-white/70"
            }`}
          >
            More{" "}
            <BiChevronDownCircle
              className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown (with animation) */}
      <div
        className={`absolute left-4 right-4 top-24 transform rounded-3xl border border-black/10 bg-white/80 dark:border-white/30 dark:bg-white/20 p-4 backdrop-blur-xl shadow-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        <div className="grid grid-cols-2 gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={`/#${link.href}`}
              onClick={() => handleLinkClick(link.href)}
              className={`flex justify-center rounded-xl border py-3 text-sm font-medium transition-all ${
                activeSection === link.href
                  ? "bg-black/10 border-black/30 text-gray-900 shadow-sm dark:bg-white/30 dark:border-white/50 dark:text-white dark:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                  : "border-black/10 bg-black/5 text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile Dropdown-এ Theme Switcher */}
        <div className="mt-4 flex justify-center border-t border-black/10 dark:border-white/10 pt-3">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
